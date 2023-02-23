'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class User extends Model {
        static associate(models) {
            this.hasOne(models.Address, { foreignKey: 'fk_user_id' })
            this.hasMany(models.Order, { foreignKey: 'fk_user_id' })
        }
    }
    User.init({
        username: DataTypes.STRING,
        password: DataTypes.STRING,
        name: DataTypes.STRING,
        email: DataTypes.STRING,
        phone: DataTypes.STRING,
    }, {
        sequelize,
        modelName: 'User',
    });

    return User;
};