const { DataTypes } = require('sequelize');


module.exports = (sequelize) => {
  sequelize.define('PokemonType', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    PokemonId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'pokemon',
        key: 'id',
      },
    },
    TypeId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'type',
        key: 'id',
      },
    },
  });

};
