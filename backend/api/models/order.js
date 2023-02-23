'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class Order extends Model {
        static associate(models) {
            this.belongsTo(models.User, { foreignKey: 'fk_user_id' })
            this.belongsToMany(models.Dish, { through: 'OrderDish', foreignKey: 'fk_order_id', otherKey: 'fk_dish_id' })
        }
    }
    Order.init({
        order_date: DataTypes.DATE
    }, {
        sequelize,
        modelName: 'Order',
    });
    return Order;
};
