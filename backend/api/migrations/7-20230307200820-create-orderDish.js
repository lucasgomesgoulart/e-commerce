'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Order_has_dish', {
      id: {
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      fk_order_id:{
        type: Sequelize.INTEGER,
        allowNull: false,
        references:{
          model: 'Orders',
          key: 'id_order'
        }
      },
      fk_dish_id:{
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Dishes',
          key: 'id_dish'
        }
      }
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Order_has_dish');
  }
};
