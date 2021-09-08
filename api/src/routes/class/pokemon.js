const { Pokemon } = require('../../db')
const Models=require('./ClassPokemon')

const controlerPokemon= new Models(Pokemon) 
module.exports = controlerPokemon;