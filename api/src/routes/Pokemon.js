const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const { Pokemon } = require('../db');
const router = Router();
const axios = require("axios")


router.get("/" , async (req, res)=>{
    let dbPokemon = await Pokemon.findAll()
    let dbPokemonParse = []    
    for (let i = 0; i < dbPokemon.length; i++) {
        let foundpokemon = dbPokemon[i];
        foundpokemon = foundpokemon.dataValues;
        dbPokemonParse.push(foundpokemon)
    }
  axios.get("https://pokeapi.co/api/v2/pokemon") 
    .then(respuesta => {  
        dbPokemonParse= [...dbPokemonParse, ...respuesta.data.results]
         res.send(dbPokemonParse)
    })
    .catch(error => {
        console.log(error)
    })
})
module.exports = router;