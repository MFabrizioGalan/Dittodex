const { Pokemon, Type } = require("../../db");

const getPokemonById = async (id) => {
    try {
        const pokemon = await Pokemon.findByPk(id, {
            include: [
                {
                    model: Type,
                    attributes: ['name'],
                    through: {
                        attributes: [],
                    },
                }

            ],
        });
        return pokemon;
    } catch (error) {
        console.log(error);
    }
};


module.exports= {getPokemonById};