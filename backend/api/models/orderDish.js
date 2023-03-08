// Tabela OrderDish
'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class OrderDish extends Model {
    static associate(models) {}
  }
  OrderDish.init({
    fk_order_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Order',
        key: 'id_order'
      }
    },
    fk_dish_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Dish',
        key: 'id_dish'
      }
    }
  }, {
    sequelize,
    modelName: 'OrderDish',
    underscored: true,
    tableName: 'orderDish'
  });

  return OrderDish;
};