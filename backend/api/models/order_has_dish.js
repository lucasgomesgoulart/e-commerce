// Tabela Order_has_dish
'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Order_has_dish extends Model {
    static associate(models) {}
  }
  Order_has_dish.init({
    id:{
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    fk_order_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Orders',
        key: 'id_order'
      }
    },
    fk_dish_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Dishes',
        key: 'id_dish'
      }
    }
  }, {
    sequelize,
    modelName: 'order_has_dish',
    underscored: true,
    tableName: 'order_has_dish'
  });

  return Order_has_dish;
};
