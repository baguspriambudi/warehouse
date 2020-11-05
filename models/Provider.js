// const Sequelize = require('sequelize');
// const sequelize = require('../database/connection');

module.exports = (Sequelize, sequelize) => {
  const Provider = sequelize.define('Provider', {
    id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
    provider: { type: Sequelize.ENUM('google', 'facebook'), allowNull: false },
  });
  Provider.associate = (models) => {
    Provider.hasMany(models.User, {
      onDelete: 'casecade',
    });
  };
  return Provider;
};
