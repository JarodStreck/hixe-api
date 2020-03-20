"use strict";
module.exports = (sequelize, DataTypes) => {
  const races = sequelize.define(
    "races",
    {
      Id: DataTypes.INTEGER,
      name: DataTypes.STRING,
      description: DataTypes.TEXT,
      startDate: DataTypes.DATE,
      endDate: DataTypes.DATE,
      formType: DataTypes.TEXT,
      meetingHour: DataTypes.DATE,
      meetingLocation: DataTypes.STRING,
      heightDifference: DataTypes.INTEGER,
      maxParticipant: DataTypes.INTEGER,
      creatorId: DataTypes.INTEGER
    },
    {}
  );
  races.associate = function (models) {
    races.belongsTo(models.state);
    races.belongsTo(models.difficulties);
    races.belongsToMany(models.materials, {
      through: models.neededMaterials
    });
    races.belongsToMany(models.users, {
      through: models.participants,
      foreignKey: "raceId",
      as: "races",
    });
    races.belongsTo(models.users, { as: "Creator" });
  };
  return races;
};
