module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('shipments', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      user_uuid: {
        type: Sequelize.UUID,
        allowNull: false,
        references: {
          model: 'users',
          key: 'uuid'
        },
        onDelete: 'CASCADE'
      },
      quote_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'quotes',
          key: 'id'
        },
        onDelete: 'SET NULL'
      },
      parcel_rate_source: {
        type: Sequelize.STRING,
        allowNull: false
      },
      recipient: {
        type: Sequelize.UUID,
        allowNull: false,
        references: {
          model: 'users',
          key: 'uuid'
        },
        onDelete: 'SET NULL'
      },
      sender: {
        type: Sequelize.UUID,
        allowNull: false,
        references: {
          model: 'users',
          key: 'uuid'
        },
        onDelete: 'SET NULL'
      },
      estimated_date: {
        type: Sequelize.DATE,
        allowNull: false
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
    await queryInterface.dropTable('shipments');
  }
};
