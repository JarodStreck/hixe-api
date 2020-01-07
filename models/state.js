'use strict';
module.exports = (sequelize, DataTypes) => {
  const state = sequelize.define('state', {
    name: DataTypes.STRING
  }, {});
  state.associate = function(models) {
    // associations can be defined here
  };
  return state;
};