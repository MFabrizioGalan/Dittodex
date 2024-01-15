const { Pokemon } = require('../db');

const getAllPokemons = async () => {
    const pokemons = await Pokemon.findAll({
        attributes: [
            'id',
            'name',
            'types',
            'image',
            'height',
            'weight',
            'stats',
        ],
    });

    if (pokemons.length === 0) {
        throw new Error('No hay pokemons para mostrar');
    }

    const selectPokemon = pokemons.map(({ id, name, types, image, height, weight, stats }) => {
        
        const statsObject = stats.reduce((acc, stat) => {
            acc[stat.name] = stat.value;
            return acc;
        }, {});

        return {
            id,
            name,
            // types,
            image,
            height,
            weight,
            // hp: statsObject['hp'] || null,
            // attack: statsObject['attack'] || null,
            // defense: statsObject['defense'] || null,
            // specialAttack: statsObject['special-attack'] || null,
            // specialDefense: statsObject['special-defense'] || null,
            // speed: statsObject['speed'] || null,
            // accuracy: statsObject['accuracy'] || null,
            // evasion: statsObject['evasion'] || null,
        };
    });

    return selectPokemon;
};

module.exports = { getAllPokemons };
