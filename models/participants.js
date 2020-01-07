'use strict';
module.exports = (sequelize, DataTypes) => {
  const participants = sequelize.define('participants', {
    user_id: DataTypes.INTEGER,
    race_id: DataTypes.INTEGER,
    isOwner: DataTypes.BOOLEAN
  }, {});
  participants.associate = function(models) {
    participants.belongsTo(models.users)
    participants.belongsTo(models.races)
  };
  return participants;
};