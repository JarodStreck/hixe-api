'use strict';
module.exports = (sequelize, DataTypes) => {
  const users = sequelize.define('users', {
    firstname: DataTypes.STRING,
    lastname: DataTypes.STRING,
    password: DataTypes.STRING,
    email: DataTypes.STRING,
    group_id: DataTypes.INTEGER,

  }, {});
  users.associate = function(models) {
    users.belongsTo(models.group)
  };
  return users;
};