'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    static associate(models) {
      Order.belongsTo(models.User, { foreignKey: 'user_id' });
      Order.belongsTo(models.Restaurant, { foreignKey: 'restaurant_id' });
      Order.belongsToMany(models.Dish, { through: models.Order_has_Dish, foreignKey: 'order_id' });
    }
  }
  Order.init({
    total_price: DataTypes.DECIMAL(8, 2),
    status: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Order',
  });
  return Order;
};
