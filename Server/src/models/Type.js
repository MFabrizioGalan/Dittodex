const { DataTypes } = require('sequelize');

const Type = (sequelize) => {
    sequelize.define(
        'type',
        {
            id: {
                type: DataTypes.UUID,
                defaultValue: DataTypes.UUIDV4,
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
