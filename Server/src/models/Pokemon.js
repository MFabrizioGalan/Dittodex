// const { DataTypes } = require('sequelize');

// const Pokemon = (sequelize) => {
//     sequelize.define(
//         'pokemon',
//         {
//             id: {
//                 type: DataTypes.INTEGER,
//                 autoIncrement: true,
//                 primaryKey: true,
//             },
//             name: {
//                 type: DataTypes.STRING(100),
//                 allowNull: false,
//             },
//             types: {
//                 type: DataTypes.ENUM(
//                     'normal',
//                     'fighting',
//                     'flying',
//                     'poison',
//                     'ground',
//                     'rock',
//                     'bug',
//                     'ghost',
//                     'steel',
//                     'fire',
//                     'water',
//                     'grass',
//                     'electric',
//                     'psychic',
//                     'ice',
//                     'dragon',
//                     'dark',
//                     'fairy',
//                     'unknown',
//                     'shadow'
//                 ),
//                 allowNull: false,
//             },
//             image: {
//                 type: DataTypes.STRING,
//                 allowNull: false,
//             },
//             height: {
//                 type: DataTypes.INTEGER,
//                 allowNull: false,
//             },
//             weight: {
//                 type: DataTypes.INTEGER,
//                 allowNull: false,
//             },
//             stats: {
//                 type: DataTypes.JSONB, 
//                 allowNull: false,
//             },
//             // hp: {
//             //     type: DataTypes.INTEGER,
//             //     allowNull: false,
//             // },
//             // attack: {
//             //     type: DataTypes.INTEGER,
//             //     allowNull: false,
//             // },
//             // defense: {
//             //     type: DataTypes.INTEGER,
//             //     allowNull: false,
//             // },
//             // speed: {
//             //     type: DataTypes.INTEGER,
//             //     allowNull: false,
//             // },
//             active: {
//                 type: DataTypes.BOOLEAN,
//                 defaultValue: true,
//             },
//         },
//         {
//             timestamps: false,
//         }
//     );
// };

// module.exports = Pokemon;

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
            types: {
                type: DataTypes.ARRAY(DataTypes.STRING),
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
            // stats: {
            //     type: DataTypes.JSONB, 
            //     allowNull: false,
            // },
            // active: {
            //     type: DataTypes.BOOLEAN,
            //     defaultValue: true,
            // },
        },
        {
            timestamps: false,
        }
    );
};

module.exports = Pokemon;
