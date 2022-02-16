const { DataTypes, Sequelize, Model } = require('sequelize');
const database = require('../setting/connection');

class Rol extends Model { }

Rol.init(
    {
        rol_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        rol: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
    },
    { database, modelName: 'rol', timestamps: false }
)

