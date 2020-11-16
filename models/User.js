// const { Model } = require('sequelize');

// module.exports = (sequelize, DataTypes) => {
//   class User extends Model {
//     /**
//      * Helper method for defining associations.
//      * This method is not a part of Sequelize lifecycle.
//      * The `models/index` file will call this method automatically.
//      */
//     static associate(models) {
//       User.belongsTo(models.Provider, {
//         as: 'providers',
//         foreignKey: 'providerId',
//       });
//     }
//   }
//   User.init(
//     {
//       email: DataTypes.STRING,
//       name: DataTypes.STRING,
//       providerId: DataTypes.INTEGER,
//       socialId: DataTypes.INTEGER,
//     },
//     {
//       sequelize,
//       modelName: 'User',
//     },
//   );
//   return User;
// };

const { DataTypes } = require('sequelize');
const sequelize = require('../database/connection');

const User = sequelize.define('User', {
  email: DataTypes.STRING,
  name: DataTypes.STRING,
  providerId: { type: DataTypes.INTEGER, references: { model: 'provider', key: 'id' } },
  socialId: DataTypes.STRING,
});
User.associate = (models) => {
  User.belongsTo(models.Provider, { foreignKey: 'id', as: 'provider' });
};
module.exports = User;
