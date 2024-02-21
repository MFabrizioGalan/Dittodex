const { Pokemon, Type } = require('../../db');
const { Op } = require('sequelize');

const getPokemonByName = async (name, page) => {
  const itemsPerPage = 25;
  const offset = (page - 1) * itemsPerPage;
  const number = await Pokemon.count({ where: { name: { [Op.iLike]: `%${name}%` } } });
  const numberOfPages = Math.ceil(number / itemsPerPage);
  const data = await Pokemon.findAll({
    limit: itemsPerPage,
    offset: offset,
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
  const result = {
    curretPage: page,
    allPage: numberOfPages,
    count: data.length,
    pokemons: data,
} 
  if (data.length === 0)
    throw new Error(`No se encontró el Pokemón con el nombre: ${name}.`);

  return result;
};

module.exports = {getPokemonByName};
