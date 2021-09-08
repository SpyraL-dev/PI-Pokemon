
const { Router } = require('express');
const controlerPokemon = require('./class/pokemon')
const router = Router();
const {Pokemon} = require("../db")


router.get('/All',controlerPokemon.getAll)
router.post('/',controlerPokemon.postPokemon)
router.get('/:id',controlerPokemon.getById)
router.get('/',controlerPokemon.getByName)
router.post("/NewPokemon", (req, res) => {
    const { Nombre, Vida, Fuerza, Defensa, Velocidad, Altura, Peso, Imagen } =req.body.value;
    const Tipos = req.body.value.Tipos;   
    const creados = Pokemon.findAll()
    Pokemon.create({
          Nombre,
          Vida,
          Fuerza,
          Defensa,
          Velocidad,
          Altura,
          Peso,
          Imagen,
          Tipos,
      })
      .then(doneTemp=>{
          console.log(creados)
      return res.status(200).json(doneTemp)
  })
  .catch(error=>{ res.send(error)})
    
  });
 
module.exports = router