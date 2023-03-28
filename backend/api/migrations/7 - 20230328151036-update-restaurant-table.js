'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.renameColumn('restaurants', 'commercial_name', 'description');
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.renameColumn('restaurants', 'description', 'commercial_name');
  }
};
