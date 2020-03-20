"use strict";
module.exports = (sequelize, DataTypes) => {
  const users = sequelize.define(
    "users",
    {
      firstname: DataTypes.STRING,
      lastname: DataTypes.STRING,
      password: DataTypes.STRING,
      email: DataTypes.STRING,
      groupId: DataTypes.INTEGER
    },
    {}
  );
  users.associate = function(models) {
    users.belongsTo(models.group);
    users.belongsToMany(models.races, {
      through: models.participants,
      foreignKey: "userId",
      as: "races"
    });
  };
  return users;
};
