'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Order_has_Dish extends Model {
    static associate(models) {
      Order_has_Dish.belongsTo(models.Order, { foreignKey: 'order_id' });
      Order_has_Dish.belongsTo(models.Dish, { foreignKey: 'dish_id' });
    }
  }
  Order_has_Dish.init({
    quantity: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Order_has_Dish',
  });
  return Order_has_Dish;
};
