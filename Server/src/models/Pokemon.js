const { DataTypes } = require('sequelize');

const Pokemon = (sequelize) => {
    sequelize.define(
        'pokemon',
        {
            id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true,
            },
            name: {
                type: DataTypes.STRING(100),
                allowNull: false,
            },
            image: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            height: {
                type: DataTypes.INTEGER,
                allowNull: false,
            },
            weight: {
                type: DataTypes.INTEGER,
                allowNull: false,
            },
            hp: {
                type: DataTypes.INTEGER,
                allowNull: false,
            },
            attack: {
                type: DataTypes.INTEGER,
                allowNull: false,
            },
            defense: {
                type: DataTypes.INTEGER,
                allowNull: false,
            },
        },
        {
            timestamps: false,
        }
    );
};

module.exports = Pokemon;
