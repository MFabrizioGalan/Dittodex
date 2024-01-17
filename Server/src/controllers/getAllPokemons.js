const { Pokemon, Type } = require('../db');

const getAllPokemons = async () => {
    const pokemons = await Pokemon.findAll({
        attributes: [
            'id',
            'name',
            'types',
            'image',
            'height',
            'weight',
            'hp',
            'attack',
            'defense',
        ],
        // include: [
        //     {
        //         model: Type,
        //         attributes: ['name'],
        //         through: {
        //             attributes: [],
        //         },
        //     },
        // ],
    });

    if (pokemons.length === 0) {
        throw new Error('No hay pokemons para mostrar');
    }

return pokemons
};

module.exports = { getAllPokemons };
