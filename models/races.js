"use strict";
module.exports = (sequelize, DataTypes) => {
  const races = sequelize.define(
    "races",
    {
      name: DataTypes.STRING,
      description: DataTypes.TEXT,
      startDate: DataTypes.DATE,
      endDate: DataTypes.DATE,
      formType: DataTypes.TEXT,
      meetingHour: DataTypes.DATE,
      heightDifference: DataTypes.INTEGER,
      maxParticipant: DataTypes.INTEGER
    },
    {}
  );
  races.associate = function(models) {
    races.belongsTo(models.state);
    races.belongsTo(models.difficulties);
    races.belongsToMany(models.materials, {
      through: models.neededMaterials
    });
    races.belongsToMany(models.users, {
      through: models.participants
    });
  };
  return races;
};
