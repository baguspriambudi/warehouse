const Sequelize = require('sequelize');
const db = require('../config/config.json');

const sequelize = new Sequelize(db.development.database, db.development.username, db.development.password, {
  host: db.development.host,
  dialect: db.development.dialect,
  operatorsAliases: db.development.operatorsAliases,
});
sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
  });

module.exports = sequelize;
global.sequelize = sequelize;
