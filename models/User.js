const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize('sqlite::memory:');

module.exports = sequelize.define('Users', {
  id: { type: DataTypes.INTEGER(11), allowNull: false, autoIncrement: true, primarykey: true },
  username: { type: DataTypes.STRING(35), allowNull: false, unique: true },
  passwd: { type: DataTypes.STRING(20), allowNull: false },
});
