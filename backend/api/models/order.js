'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    static associate(models) {
      Order.belongsTo(models.User, { foreignKey: 'user_id' });
      Order.belongsTo(models.Restaurant, { foreignKey: 'restaurant_id' });
      Order.belongsToMany(models.Dish, { through: 'orderDish', foreignKey: 'orderId' });
    }
  }
  Order.init({
    status: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Order',
  });
  return Order;
};
