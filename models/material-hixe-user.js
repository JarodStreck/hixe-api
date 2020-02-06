"use strict";
module.exports = (sequelize, DataTypes) => {
  const materialHixeUser = sequelize.define(
    "material-hixe-user",
    {
      materialId: DataTypes.INTEGER,
      userId: DataTypes.INTEGER,
      raceId: DataTypes.INTEGER
    },
    {}
  );
  materialHixeUser.associate = function(models) {
    materialHixeUser.belongsTo(models.materials);
    materialHixeUser.belongsTo(models.races);
    materialHixeUser.belongsTo(models.users);
  };
  return materialHixeUser;
};
