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
    const number = await Pokemon.count();
    const numberOfPages = Math.ceil(number / itemsPerPage);
    if (pokemons.length === 0) {
        throw new Error('No hay pokemons para mostrar');
    }
    const result = {
        currentPage: page,
        count: pokemons.length,
        allPage: numberOfPages,
        pokemons: pokemons
    } 

return result
};

module.exports = { getAllPokemons };
