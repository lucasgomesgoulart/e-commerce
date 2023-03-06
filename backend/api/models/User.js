'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class User extends Model {
        static associate(models) {
            this.hasOne(models.Address, {foreignKey: 'id_user'})
            this.hasOne(models.Individual, {foreignKey: 'id_user'})
            this.hasOne(models.Company, {foreignKey: 'id_user'})
        }
    }
    User.init({
        username: DataTypes.STRING,
        password: DataTypes.STRING,
        name: DataTypes.STRING,
    }, {
        sequelize,
        modelName: 'User',
        underscored: true
    });

    return User;
};