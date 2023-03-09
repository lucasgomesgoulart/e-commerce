'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('users', {
      id_user: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      password: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      type: {
        type: Sequelize.INTEGER,
        defaultValue: 0,
        validate: {
          isIn: [[0, 1]]
        }
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
        validate: {
          isEmail: true,
        },
      },
      phone: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      cpf: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
        validate: {
          is: /^\d{11}$/,
        },
      },
      business_name: {
        type: Sequelize.STRING,
        allowNull: function () {
          if (this.type === 1) {
            return false;
          }
          return true;
        }
      },
      cnpj: {
        type: Sequelize.STRING,
        unique: true,
        allowNull: function () {
          if (this.type === 1) {
            return false;
          }
          return true;
        },
        validate: {
          is: function (value) {
            if (this.type === 1 && value && !(/^\d{14}$/).test(value)) {
              throw new Error("The CNPJ field must have 14 digits when type is 1");
            }
          },
        },
      },
      trade_name: {
        type: Sequelize.STRING,
        unique: true,
        allowNull: function () {
          if (this.type === 1) {
            return false;
          }
          return true;
        }
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('users');
  }
};