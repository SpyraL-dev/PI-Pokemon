const { Router } = require('express');
const routespokemon = require('./pokemon')
const routestype = require('./type')
const {Pokemon} = require("../db")

const router = Router();
router.use('/pokemon',routespokemon)
router.use('/type',routestype)
router.get("/creados", async (req,res)=>{
  try { const Creados = await Pokemon.findAll()
    res.send(Creados)
}
    catch(error){
        res.send(error)
    }
})


module.exports = router;
