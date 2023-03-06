'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class Order extends Model {
        static associate(models) {
            this.belongsToMany(models.Dish, { through: 'orderDish', foreignKey: 'order_id' })
            this.belongsTo(models.User, { foreignKey: 'user_id' })
        }
    }
    Order.init({
        order_date: DataTypes.DATE
    }, {
        sequelize,
        modelName: 'Order',
        underscored: true
    });
    return Order;
};