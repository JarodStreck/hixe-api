'use strict';
module.exports = (sequelize, DataTypes) => {
  const difficulties = sequelize.define('difficulties', {
    name: DataTypes.STRING
  }, {});
  difficulties.associate = function(models) {
    difficulties.hasMany(models.races)
  };
  return difficulties;
};