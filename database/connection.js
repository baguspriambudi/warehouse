const Sequelize = require('sequelize');

const sequelize = new Sequelize('test', 'root', 'bagus123456', {
  host: '127.0.0.1',
  dialect: 'mysql',
  operatorsAliases: 0,
});

module.exports = sequelize;
global.sequelize = sequelize;
