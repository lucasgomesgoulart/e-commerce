'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('Orders', 'order_date');
    await queryInterface.removeConstraint('Orders', 'Orders_user_id_fkey'); // adicionado
    await queryInterface.addColumn('Orders', 'id_order', {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('Orders', 'order_date', {
      type: Sequelize.DATE,
      allowNull: false
    });
    await queryInterface.addConstraint('Orders', {
      fields: ['user_id'],
      type: 'foreign key',
      name: 'Orders_user_id_fkey',
      references: {
        table: 'Users',
        field: 'id_user'
      },
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE'
    });
    await queryInterface.removeColumn('Orders', 'id_order');
  }
};
