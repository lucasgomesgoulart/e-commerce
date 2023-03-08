'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class Order extends Model {
            // para lembrar:
            // belongsTo para definir a relação de um modelo pai para um modelo filho,  belongsToMany para definir a relação de muitos-para-muitos entre dois modelos.
        static associate(models) {
            this.belongsToMany(models.Dish, { through: 'orderDish', foreignKey: 'fk_order_id' })
            this.belongsTo(models.User, { foreignKey: 'fk_user_id' })
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