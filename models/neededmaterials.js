"use strict";
module.exports = (sequelize, DataTypes) => {
  const neededMaterials = sequelize.define(
    "neededMaterials",
    {
      materialId: DataTypes.INTEGER,
      raceId: DataTypes.INTEGER
    },
    {}
  );
  neededMaterials.associate = function(models) {
    neededMaterials.belongsTo(models.materials);
    neededMaterials.belongsTo(models.races);
  };
  return neededMaterials;
};
