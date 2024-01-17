const { Router } = require('express');
const {getPokemonsHandler, getPokemonByIdHandler} = require('../handlers/pokemonHandler');

const pokemonRouter = Router();

pokemonRouter.get('/', getPokemonsHandler);
pokemonRouter.get('/:id', getPokemonByIdHandler);

module.exports = pokemonRouter;
