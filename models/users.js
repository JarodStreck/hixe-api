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
    users.belongsTo(models.participants, { foreignKey: "id" });
  };
  return users;
};
