const { Pokemon, Type } = require('../../db');
const { Op } = require('sequelize');

const getPokemonByName = async (name) => {
  const data = await Pokemon.findAll({
    where: { name: { [Op.iLike]: `%${name}%` } },
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
  if (data.length === 0)
    throw new Error(`No se encontró el Pokemón con el nombre: ${name}.`);

  return [...data];
};

module.exports = {getPokemonByName};
