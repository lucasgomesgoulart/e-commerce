'use strict';
const { Model, ForeignKeyConstraintError } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
      this.belongsToMany(models.Address, { through: 'user_has_address', foreignKey: 'fk_user_id' });
    }
  }
  User.init({
    id_user: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    type: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
      validate: {
        isIn: [[0, 1]],
      },
    },
    email: {
      type: DataTypes.STRING,
      isEmail: true,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true,
      },
    },
    phone: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    cpf: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        is: /^\d{11}$/,
      },
    },
    business_name: {
      type: DataTypes.STRING,
      allowNull: function () {
        if (this.type === 1) {
          return false;
        }
        return true;
      }
    },
    cnpj: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: function () {
        if (this.type === 1) {
          return false;
        }
        return true;
      },
      validate: {
        is: function (value) {
          if (this.type === 1 && value && !(/^\d{14$/).test(value)) {
            throw new Error("The CNPJ field must have 14 digits when type is 1")
          }
        }
      }
    },
    trade_name: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: function () {
        if (this.type === 1) {
          return false;
        }
        return true;
      }
    }
  }, {
    sequelize,
    modelName: 'User',
    tableName: 'users',
  });

  return User;
};
