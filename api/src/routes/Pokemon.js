
const { Router } = require('express');
const controlerPokemon = require('./class/pokemon')
const router = Router();
const {Pokemon} = require("../db");

const { default: axios } = require('axios');


router.get('/All',controlerPokemon.getAll)
router.get('/:id',controlerPokemon.getById)
router.get('/',controlerPokemon.getByName)
router.post("/NewPokemon", (req, res) => {
    const { Nombre, Vida, Fuerza, Defensa, Velocidad, Altura, Peso, Imagen } =req.body.value;
    const Tipos = req.body.value.Tipos; 
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