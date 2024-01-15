// const { getApiPokemons } = require('../controllers/getApiPokemons')

// const getPokemons = async (req, res) => {
//     try {
//         const pokemonDataArray = await getApiPokemons();
//         console.log("Datos a enviar al cliente:", pokemonDataArray);

     
//         res.json(pokemonDataArray);
//     } catch (error) {
//         console.error("Error en el controlador:", error.message);
//         res.status(500).json({ error: "Error interno del servidor" });
//     }
// };

// module.exports = {
//     getPokemons
// };

const { getAllPokemons } = require('../controllers/getAllPokemons');
const { getApiTypes } = require('../controllers/getApiTypes')

const getPokemons = async (req, res) => {
    try {
        // const pokemonDataArray = await getAllPokemons();
        console.log("hola")
        const pokemonDataArray = await getApiTypes();
        console.log("Datos a enviar al cliente:", pokemonDataArray);
        res.json(pokemonDataArray);
    } catch (error) {
        console.error("Error en el controlador:", error.message);
        res.status(500).json({ error: "Error interno del servidor" });
    }
};

module.exports = {
    getPokemons
};

