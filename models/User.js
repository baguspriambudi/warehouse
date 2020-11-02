const Sequelize = require('sequelize');
const sequelize = require('../database/connection');

module.exports = sequelize.define('User', {
  // provider: { type: Sequelize.ENUM('google', 'local'), allowNull: false },
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
  id: { type: Sequelize.STRING, autoIncrement: true, primaryKey: true },
  socialId: { type: Sequelize.STRING, primaryKey: true },
  email: { type: Sequelize.STRING },
  name: { type: Sequelize.STRING },
  avatar: { type: Sequelize.STRING },
});
