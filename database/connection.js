const Sequelize = require('sequelize');

const sequelize = new Sequelize('test', 'root', process.env.PASSWORD, {
  host: '127.0.0.1',
  dialect: 'mysql',
  operatorsAliases: 0,
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
