const { Router } = require('express');
const {getPokemons} = require('../handlers/pokemonHandler');

const pokemonRouter = Router();

pokemonRouter.get('/', getPokemons);

module.exports = pokemonRouter;
