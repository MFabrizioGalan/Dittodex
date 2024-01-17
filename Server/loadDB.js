const { Pokemon, Type, PokemonType } = require('./src/db');
const { getApiPokemons } = require('./src/controllers/getApiPokemons');
const { getApiTypes } = require('./src/controllers/getApiTypes');

const loadDB = async () => {
    try {
        const typesFromApi = await getApiTypes();
        const transactionTypes = await Type.sequelize.transaction();

        try {
            for (const type of typesFromApi) {
                console.log('Procesando tipo:', type);

                await Type.findOrCreate({
                    where: { name: type.name },
                    defaults: type,
                    transaction: transactionTypes,
                });
            }

            await transactionTypes.commit();
            console.log('Datos de tipos cargados con éxito en la base de datos');
        } catch (error) {
            console.error('Error al cargar datos de tipos en la base de datos:', error);
            await transactionTypes.rollback();
            throw error;
        }
    } catch (error) {
        console.error('Error al obtener datos de tipos desde la API:', error);
        throw error;
    }

    try {
        const pokemonsFromApi = await getApiPokemons();
        const transactionPokemons = await Pokemon.sequelize.transaction();

        try {
            for (const pokemon of pokemonsFromApi) {
                console.log('Procesando Pokémon:', pokemon);

                const { types, ...pokemonResto } = pokemon;
                const createdPokemon = await Pokemon.findOrCreate({
                    where: { id: pokemonResto.id },
                    defaults: pokemonResto,
                    transaction: transactionPokemons,
                });

                for (const typeName of types) {
                    console.log('Procesando tipo vinculado al Pokémon:', typeName);

                    const [createdType, created] = await Type.findOrCreate({
                        where: { name: typeName },
                        defaults: { name: typeName },
                        transaction: transactionPokemons,
                    });
                    await PokemonType.findOrCreate({
                        where: {
                            PokemonId: createdPokemon[0].id,
                            TypeId: createdType.id,
                        },
                        defaults: {
                            PokemonId: createdPokemon[0].id,
                            TypeId: createdType.id,
                        },
                        transaction: transactionPokemons,
                    });
                }
            }

            await transactionPokemons.commit();
            console.log('Datos de Pokémon y tipos vinculados cargados con éxito en la base de datos');
        } catch (error) {
            console.error('Error al cargar datos de Pokémon y tipos vinculados en la base de datos:', error);
            await transactionPokemons.rollback();
            throw error;
        }
    } catch (error) {
        console.error('Error al obtener datos de Pokémon desde la API:', error);
        throw error;
    }
};

module.exports = loadDB;
