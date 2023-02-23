'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Address extends Model {
    static associate(models) {
      this.belongsTo(models.User, { foreignKey: 'fk_user_id' })
    }
  }
  Address.init({
    street: DataTypes.STRING,
    city: DataTypes.STRING,
    state: DataTypes.STRING,
    zipCode: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Address',
  });
  return Address;
};
