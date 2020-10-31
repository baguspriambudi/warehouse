/* eslint-disable strict */
// eslint-disable-next-line strict

'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('users', {
      provider: { type: Sequelize.ENUM('google', 'local'), allowNull: false },
      // local: {
      //   id: { type: Sequelize.STRING, autoIncrement: true, primaryKey: true },
      //   email: { type: Sequelize.STRING },
      //   password: { type: Sequelize.STRING },
      // },
      // google: {
      //   socialId: { type: Sequelize.STRING, primaryKey: true },
      //   email: { type: Sequelize.STRING },
      //   avatar: { type: Sequelize.STRING },
      // },
      createdAt: Sequelize.DATE,
      updatedAt: Sequelize.DATE,
    });
  },

  down: async (queryInterface) => {
    await queryInterface.dropTable('users');
  },
};
