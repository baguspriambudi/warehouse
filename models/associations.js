const Provider = require('./Provider');
const User = require('./User');

Provider.hasMany(User);
User.belongsTo(Provider);
