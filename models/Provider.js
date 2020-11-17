const { DataTypes } = require('sequelize');
const sequelize = require('../database/connection');

module.exports = sequelize.define('Provider', {
  name: { type: DataTypes.STRING },
});
