const axios = require("axios");
const validator = require("validator");
const db = require("../../db");
const { Type } = require("../../db");


class Models {
  constructor(modelo) {
    this.model = modelo;
  }   
  getAll = async (req, res, next) => {
    const value= parseInt(req.query.paso,10)+1
    const inicio= parseInt(req.query.inicio,10)+1
       var array=[];
  const dbpokemons = axios.get("http://localhost:3001/creados")
  .then((res)=>{
  console.log(res.data)
        // arrayDb = res.data.map((dato) => {
          // return { nombre: dato.Nombre, id: dato.Id, img: dato.Imagen ,tipo:dato.Tipos ,fuerza:dato.Fuerza};
         })
       
  if(inicio===1){
     var {count,rows} =  await this.model.findAndCountAll({ include: { model: Type } });
   var arrayDb = rows.map((dato) => {
      return { nombre: dato.Nombre, id: dato.Id, img: dato.Imagen ,tipo:dato.Tipos,fuerza:dato.Fuerza};
    });
  }else{var arrayDb=[]}
   const fin= inicio===1?(value-count):value
      for(var i=inicio; i<fin;i++){
        array.push(  axios.get(`https://pokeapi.co/api/v2/pokemon/${i}/`)
       .then((res) =>  {
        return {nombre:res.data.name,id:res.data.id,fuerza:res.data.stats[1].base_stat,img:res.data.sprites.front_default,tipo:res.data.types.map((tipo) => {
          return tipo.type.name;
        })}} ) )
      }
      const resu = await Promise.all(array);
      res.send(arrayDb.concat(resu)); 
     

    
  };


  saveType = async (req, res, next) => {
   try{
     const tipos = []
      const types = await axios.get("https://pokeapi.co/api/v2/type");
      types.data.results.forEach((type) => {
        tipos.push({ Nombre: type.name })
      });

      res.send(tipos).status(200);
   }catch(error){
      console.log (error)
    }
  };
  
  getById = async (req, res, next) => {
    try {
      if (validator.isUUID(req.params.id)) {
        const result = await this.model.findByPk(req.params.id, {
          include: { model: Type },
        });
        const obj={
          nombre: result.Nombre,
           id:result.Id,
           imagen:result.Imagen,
          fuerza:result.Fuerza,
          defensa:result.Defensa,
          altura:result.Altura,
          peso:result.Peso,
          velocidad:result.Velocidad,
          tipo:result.Tipos,
          vida:result.Vida
        }
        res.send(obj).status(200);
      } else {
        const result2 = await axios.get(
          "https://pokeapi.co/api/v2/pokemon/" + req.params.id
        );

        const obj = {
          nombre: result2.data.name,
          id: result2.data.id,
          altura: result2.data.height,
          peso: result2.data.weight,
          vida: result2.data.stats[0].base_stat,
          fuerza: result2.data.stats[1].base_stat,
          defensa: result2.data.stats[2].base_stat,
          velocidad: result2.data.stats[5].base_stat,
          imagen: result2.data.sprites.front_default,
          tipo: result2.data.types.map((tipo) => tipo.type.name)
        };
        res.send(obj).status(200);
      }
    } catch (error) {
      next(error);
    }
  };
  getByName = async (req, res, next) => {
    const name = req.query.name;
    const result = await axios.get("http://localhost:3001/creados")
    const re2 = result.data.filter(el => el.Nombre === name)
    try {
      
      if(re2.length >0){
        console.log(re2[0].Nombre)
        const send = {
          nombre: re2[0].Nombre,
          id: re2[0].Id,
          img: re2[0].Imagen,
          tipo: re2[0].Tipos
        };
        console.log(send)
        res.send(send).status(200);
      } else {
         
          const result2 = await axios.get(
            `https://pokeapi.co/api/v2/pokemon/${name}`
          );
          const send = {
            nombre: result2.data.name,
            id: result2.data.id,
            img: result2.data.sprites.front_default,
            tipo:result2.data.types.map((tipo) => {
              return tipo.type.name;
            })
          };
          res.send(send).status(200);
    }
  } catch (error) {
      next(error);
      
    }
  };
}

module.exports = Models;
