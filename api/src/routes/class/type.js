const { Type } = require('../../db')
const Models=require('./ClassPokemon')
class ModelsType extends Models{
    constructor(modelo){
        super(modelo)
    }
    
}
const controlerType = new ModelsType(Type) 
module.exports = controlerType;