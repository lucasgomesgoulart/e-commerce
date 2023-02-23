'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class Dish extends Model {
        
    }
    Dish.init({
        dish_name: DataTypes.STRING,
        price: DataTypes.DECIMAL(8, 2),
        description: DataTypes.STRING,
        img_dish: DataTypes.STRING,
    }, {
        sequelize,
        modelName: 'Dish',
        timestamps: false
    });
    return Dish;
};
