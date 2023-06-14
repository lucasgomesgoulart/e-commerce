'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class Dish extends Model {
        static associate(models) {
            Dish.belongsTo(models.Restaurant, { foreignKey: 'restaurant_id' });
            Dish.belongsToMany(models.Order, { through: 'orderDish', foreignKey: 'dishId' });
        }
    }
    Dish.init({
        dish_name: DataTypes.STRING,
        price: DataTypes.DECIMAL(8, 2),
        description: DataTypes.STRING,
        img_dish: DataTypes.STRING,
    }, {
        sequelize,
        modelName: 'Dish',
    });
    return Dish;
};
