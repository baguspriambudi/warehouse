const { DataTypes } = require('sequelize');
const sequelize = require('../database/connection');

module.exports = sequelize.define('User', {
  email: DataTypes.STRING,
  name: DataTypes.STRING,
  providerId: DataTypes.INTEGER,
  socialId: DataTypes.STRING,
});
