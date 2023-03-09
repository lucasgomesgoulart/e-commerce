'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Address extends Model {
    static associate(models) {
      this.belongsToMany(models.User, { through: 'user_has_address', foreignKey: 'fk_address_id' });
    }
  }
  Address.init({
    rua: DataTypes.STRING,
    numero: DataTypes.INTEGER,
    bairro: DataTypes.STRING,
    cidade: DataTypes.STRING,
    estado: DataTypes.STRING,
    pais: DataTypes.STRING,
    fk_id_user:{
      type: DataTypes.STRING,
      references:{
        model: "User",
        key: 'id_user'
      }
    }
  }, {
    sequelize,
    modelName: 'Address',
  });

  return Address;
};
