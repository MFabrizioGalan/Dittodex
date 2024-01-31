const { getAllPokemons } = require('../controllers/pokemon/getAllPokemons');
const { getPokemonById } = require('../controllers/pokemon/getPokemonById');
const { getPokemonByName } = require('../controllers/pokemon/getPokemonByName')

const getPokemonsHandler = async (req, res) => {
    const { name } = req.query;
    const page = parseInt(req.query.page) || 1;
    if (name) {
        try {
            const pokemon = await getPokemonByName(name);
            return res.status(200).json(pokemon);
        } catch (error) {
            return res.status(400).json({ error: error.message });
        }
    } else {
        try {
            
            const pokemons = await getAllPokemons(page);
            return res.status(200).json(pokemons);
        } catch (error) {
            return res.status(400).json({ error: error.message });
        }
    }
};
const getPokemonByIdHandler = async (req, res) => {
    const { id } = req.params;
    try {
        const response = await getPokemonById(id);
        response
            ? res.status(200).json(response)
            : res.status(404).json({ message: 'Pokemón no encontrado' });
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener un Pokemón' });
    }
};

module.exports = {
    getPokemonsHandler,
    getPokemonByIdHandler
};

