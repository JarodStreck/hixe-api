'use strict';
module.exports = (sequelize, DataTypes) => {
  const neededMaterials = sequelize.define('neededMaterials', {
    material_id: DataTypes.INTEGER,
    race_id: DataTypes.INTEGER
  }, {});
  neededMaterials.associate = function(models) {
      neededMaterials.belongsTo(models.materials)
      neededMaterials.belongsTo(models.races)
  };
  return neededMaterials;
};