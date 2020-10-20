// const { Sequelize, DataTypes } = require('sequelize');

// const sequelize = new Sequelize('sqlite::memory:', { freezeTableName: true });

// module.exports = sequelize.define('Users', {
//   // id: { type: DataTypes.INTEGER(11), allowNull: false, autoIncrement: true, primarykey: true },
//   username: { type: DataTypes.STRING(35), allowNull: false, unique: true },
//   passwd: { type: DataTypes.STRING(20), allowNull: false },
// });

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    username: { type: DataTypes.STRING(35), allowNull: false, unique: true },
    password: { type: DataTypes.STRING(20), allowNull: false },
  });
  return User;
};
