const { Pokemon, Type } = require('./src/db')
const { getApiPokemons } = require('./src/controllers/getApiPokemons');
const { getApiTypes } = require('./src/controllers/getApiTypes');

const loadDB = async () => {
    const pokemons = await getApiPokemons();
    const transaction = await Pokemon.sequelize.transaction();
    try {
        for (const pokemon of pokemons) {
            await Pokemon.findOrCreate({
                where: { id: pokemon.id },
                defaults: pokemon,
                transaction,
            });
        }

        await transaction.commit();
        console.log('Datos cargados con éxito en la base de datos.');
    } catch (error) {
        await transaction.rollback();
        console.error('Error al cargar datos en la base de datos:', error);
        throw error;
    }
    const types = await getApiTypes();
    const typedb = await Type.sequelize.transaction();
    try {
        for (const type of types) {
            await Type.findOrCreate({
                where: { name: type.name },
                defaults: type,
                typedb,
            });
        }

        await typedb.commit();
        console.log('Datos cargados con éxito en la base de datos types.');
    } catch (error) {
        await typedb.rollback();
        console.error('Error al cargar datos en la base de datos:', error);
        throw error;
    }
};

module.exports = loadDB;
