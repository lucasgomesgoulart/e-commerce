'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Restaurant extends Model {

    static associate(models) {
      Restaurant.belongsTo(models.User, {
        foreignKey: 'user_id',
        as: 'user'
      });
      Restaurant.hasMany(models.Dish, {
        foreignKey: 'restaurant_id',
        as: 'dishes'
      });
      Restaurant.hasMany(models.Order, {
        foreignKey: 'restaurant_id',
        as: 'orders'
      });

      Restaurant.hasOne(models.restaurant_address, {
        foreignKey: 'restaurant_id',
        as: 'address',
        modelName: 'restaurant_address'
      })      
    }
  };
  Restaurant.init({
    name: DataTypes.STRING,
    cnpj: DataTypes.STRING,
    description: DataTypes.STRING,
    phone: DataTypes.STRING,
    Type: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Restaurant',
  });
  return Restaurant;
};
