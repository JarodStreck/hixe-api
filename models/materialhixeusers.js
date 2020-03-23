"use strict";
module.exports = (sequelize, DataTypes) => {
  const materialHixeUsers = sequelize.define(
    "materialHixeUsers",
    {
      materialId: DataTypes.INTEGER,
      userId: DataTypes.INTEGER,
      raceId: DataTypes.INTEGER
    },
    {}
  );
  materialHixeUsers.associate = function(models) {
    materialHixeUsers.belongsTo(models.materials);
    materialHixeUsers.belongsTo(models.races);
    materialHixeUsers.belongsTo(models.users);
  };
  return materialHixeUsers;
};
