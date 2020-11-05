const Sequelize = require('sequelize');
const sequelize = require('../database/connection');

module.exports = sequelize.define('User', {
  id: { type: Sequelize.STRING, autoIncrement: true, primaryKey: true },
  socialId: { type: Sequelize.STRING, primaryKey: true },
  email: { type: Sequelize.STRING },
  name: { type: Sequelize.STRING },
  avatar: { type: Sequelize.STRING },
});
