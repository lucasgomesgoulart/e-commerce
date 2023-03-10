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
    }
  };
  Restaurant.init({
    name: DataTypes.STRING,
    cnpj: DataTypes.STRING,
    commercial_name: DataTypes.STRING,
    status: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Restaurant',
  });
  return Restaurant;
};
