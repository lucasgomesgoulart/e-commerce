'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('users', {
      id_user: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      name: Sequelize.STRING,
      password: Sequelize.STRING,

      type: {
        type: Sequelize.INTEGER,
        validade: {
          isIn: [[0, 1]]
        }
      },
      email: {
        unique: true,
        type: Sequelize.STRING,
      },
      phone: Sequelize.STRING,

      cpf: {
        type: Sequelize.STRING,
        unique: true,
      },
      business_name: Sequelize.STRING,
      cnpj: {
        type: Sequelize.STRING,
        unique: true,
      },
      trade_name: {
        unique: true,
        type: Sequelize.STRING,
      },
      createdAt: Sequelize.DATE,
      updatedAt: Sequelize.DATE,
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('users');
  }
};
