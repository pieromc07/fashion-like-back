const { DataTypes, Model } = require('sequelize');
const sequelize = require('../setting/connection');

class User extends Model { }
User.init(
    {
        user_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false
        },
        fullname: {
            type: DataTypes.STRING,
            allowNull: false
        },
        rol_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'rol',
                key: 'rol_id'
            }
        }

    },
    { sequelize, modelName: 'user', timestamps: false }
);

module.exports = { User };