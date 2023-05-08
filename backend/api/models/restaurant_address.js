'use strict';
const { Model, DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  class Restaurant_address extends Model {
    static associate(models) {
      Restaurant_address.belongsTo(models.Restaurant, {
        foreignKey: 'id',
        as: 'restaurant'
      });
    }
  }

  Restaurant_address.init({
    street: DataTypes.STRING,
    number: DataTypes.STRING,
    neighborhood: DataTypes.STRING,
    city: DataTypes.STRING,
    state: DataTypes.STRING,
    zip_code: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'restaurant_address',
    tableName: 'restaurant_address' // nome correto da tabela no banco de dados
  });

  return Restaurant_address;
};
