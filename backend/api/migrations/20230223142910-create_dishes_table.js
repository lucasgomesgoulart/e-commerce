'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Dishes', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      dish_name: {
        type: Sequelize.STRING
      },
      price: {
        type: Sequelize.DECIMAL(8, 2)
      },
      description: {
        type: Sequelize.STRING
      },
      img_dish: {
        type: Sequelize.STRING
      }
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Dishes');
  }
}