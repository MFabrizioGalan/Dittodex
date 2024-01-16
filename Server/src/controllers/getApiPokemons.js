const axios = require('axios');

const getApiPokemons = async () => {
    try {
        const totalPokemonCount = 1012;
        const pokemonIds = Array.from({ length: totalPokemonCount }, (_, index) => index + 1);

        const responses = await Promise.all(
            pokemonIds.map(async (pokemonId) => {
                try {
                    console.log(`Obteniendo datos para el Pokemon con ID ${pokemonId}`);
                    const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`);
                    return { success: true, data: response.data };
                } catch (error) {
                    if (error.response && error.response.status === 404) {
                        console.warn(`No se encontró el Pokemon con ID ${pokemonId}, código de respuesta: 404`);
                    } else {
                        console.error(`Error al obtener datos para el Pokemon con ID ${pokemonId}: ${error.message}`);
                    }
                    return { success: false, error: error.message };
                }
            })
        );

        const pokemonDataArray = responses
            .filter((result) => result.success)
            .map((result) => {
                const pokemonData = result.data;
                const stats = pokemonData.stats.map(stat => ({
                    name: stat.stat.name,
                    value: stat.base_stat,
                }));
                const statsObject = stats.reduce((acc, stat) => {
                    acc[stat.name] = stat.value;
                    return acc;
                }, {});
                return {
                    id: pokemonData.id,
                    name: pokemonData.name,
                    types: pokemonData.types.map(type => type.type.name),
                    image: pokemonData.sprites.other['official-artwork'].front_default,
                    height: pokemonData.height,
                    weight: pokemonData.weight,
                    hp: statsObject['hp'] || null,
                    attack: statsObject['attack'] || null,
                    defense: statsObject['defense'] || null,
                    // specialAttack: statsObject['special-attack'] || null,
                    // specialDefense: statsObject['special-defense'] || null,
                    // speed: statsObject['speed'] || null,
                    // accuracy: statsObject['accuracy'] || null,
                    // evasion: statsObject['evasion'] || null,
                    // stats: stats,
                };
            });

        console.log(`Datos recibidos para todos los Pokemon`);
        return pokemonDataArray;
    } catch (error) {
        console.error("Error al obtener datos de la API:", error.message);
        throw error;
    }
}

module.exports = {
    getApiPokemons
};
