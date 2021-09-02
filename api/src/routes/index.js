const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const pokemonroutes = require("../routes/Pokemon")
const typesroutes = require("../routes/Types")

const routes = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
routes.use("/Pokemon" , pokemonroutes)
routes.use("/Types" , typesroutes)


module.exports = routes;
