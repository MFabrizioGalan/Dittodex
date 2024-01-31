const { Pokemon, Type } = require('../../db');

const getAllPokemons = async (page) => {
    const itemsPerPage = 25;
    const offset = (page - 1) * itemsPerPage;
    const pokemons = await Pokemon.findAll({
        limit: itemsPerPage,
        offset: offset,
        attributes: [
            'id',
            'name',
            'image',
            // 'height',
            // 'weight',
            // 'hp',
            // 'attack',
            // 'defense',
        ],
        include: [
            {
                model: Type,
                attributes: ['name'],
                through: {
                    attributes: [],
                },
            },
        ],
    });

    if (pokemons.length === 0) {
        throw new Error('No hay pokemons para mostrar');
    }
    const result = {
        page: page,
        count: pokemons.length,
        pokemons: pokemons
    } 

return result
};

module.exports = { getAllPokemons };
