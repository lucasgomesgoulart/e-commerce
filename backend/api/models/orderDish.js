'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class orderDish extends Model {
    static associate(models) {
      orderDish.belongsTo(models.Order, { foreignKey: 'orderId' });
      orderDish.belongsTo(models.Dish, { foreignKey: 'dishId' });
    }
  }
  orderDish.init({
    quantity: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'orderDish',
    tableName: 'orderDish',
  });
  return orderDish;
};