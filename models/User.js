const Sequelize = require('sequelize');
const sequelize = require('../database/connection');

module.exports = sequelize.define('User', {
  id: { type: Sequelize.INTEGER, allowNull: false, autoIncrement: true, primaryKey: true },
  email: { type: Sequelize.STRING, allowNull: false },
  password: { type: Sequelize.STRING, allowNull: false },
  method: { type: Sequelize.ENUM('google', 'facebook') },
});
