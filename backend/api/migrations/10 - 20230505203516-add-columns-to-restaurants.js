module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('Restaurants', 'type', {
      type: Sequelize.STRING,
      allowNull: true
    });
    await queryInterface.addColumn('Restaurants', 'phone', {
      type: Sequelize.STRING,
      allowNull: true
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('Restaurants', 'type');
    await queryInterface.removeColumn('Restaurants', 'phone');
  }
};
