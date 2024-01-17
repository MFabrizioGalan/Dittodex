const { DataTypes } = require('sequelize');

const Type = (sequelize) => {
    sequelize.define(
        'type',
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

        },
        {
            timestamps: false,
        }
    );
};

module.exports = Type;
