module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('quotes', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      origin: {
        type: Sequelize.JSON,
        allowNull: false,
      },
      destination: {
        type: Sequelize.JSON,
        allowNull: false,
      },
      ship_date: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      package_meta: {
        type: Sequelize.JSON,
        allowNull: false,
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      }
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('quotes');
  }
};
