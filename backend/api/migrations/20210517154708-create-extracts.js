'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Extracts', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      origin_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {model: 'Clients', key: 'id'}
      },
      destiny_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {model: 'Clients', key: 'id'}
      },
      transaction_date: {
        type: Sequelize.DATE
      },
      transaction_value: {
        type: Sequelize.DOUBLE
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Extracts');
  }
};