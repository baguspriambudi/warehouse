const express = require('express');

// const mysql = require('mysql2');
const { Sequelize } = require('sequelize');

const PORT = 1000;
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// const connect = mysql.createConnection({
//   host: 'localhost',
//   user: 'root',
//   password: 'bagus123456',
//   databases: 'test',
// });
// connect.connect((err) => {
//   if (err) throw err;
//   console.log('Mysql Connected...');
// });

const sequelize = new Sequelize('test', 'root', 'bagus123456', {
  host: 'localhost',
  dialect: 'mysql',
});
try {
  sequelize.authenticate();
  console.log('Connection has been established successfully.');
} catch (error) {
  console.error('Unable to connect to the database:', error);
}

app.listen(PORT, console.log(`listening on PORT ${PORT}`));
