const Sequelize = require('sequelize');
const sequelize = require('../database/connection');

module.exports = sequelize.define('User', {
  id: { type: Sequelize.INTEGER, allowNull: false, autoIncrement: true, primaryKey: true },
  username: { type: Sequelize.STRING, allowNull: false },
  password: { type: Sequelize.STRING, allowNull: false },
});
