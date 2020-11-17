const { DataTypes } = require('sequelize');
const sequelize = require('../database/connection');

const Provider = sequelize.define('Provider', {
  name: { type: DataTypes.STRING },
});

Provider.associate = (models) => {
  Provider.hasMany(models.User, {
    as: 'user',
  });
};

module.exports = Provider;
