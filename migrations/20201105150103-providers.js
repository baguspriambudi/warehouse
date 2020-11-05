/* eslint-disable strict */
// eslint-disable-next-line strict

'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('providers', {
      id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
      provider: { type: Sequelize.ENUM('google', 'facebook'), allowNull: false },
    });
  },

  down: async (queryInterface) => {
    await queryInterface.dropTable('providers');
  },
};
