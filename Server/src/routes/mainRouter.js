const { Router } = require('express');

const pokemonRouter = require('./pokemonsRouter')


const mainRouter = Router();

mainRouter.use('/pokemon', pokemonRouter);

module.exports = mainRouter;