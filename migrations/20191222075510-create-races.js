"use strict";
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("races", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.TEXT
      },
      startDate: {
        type: Sequelize.DATE
      },
      endDate: {
        type: Sequelize.DATE
      },
      formType: {
        type: Sequelize.TEXT
      },
      meetingHour: {
        type: Sequelize.DATE
      },
      meetingLocation: {
        type: Sequelize.STRING
      },
      heightDifference: {
        type: Sequelize.INTEGER
      },
      maxParticipant: {
        type: Sequelize.INTEGER
      },
      stateId: {
        type: Sequelize.INTEGER,
        references: {
          model: "states",
          key: "id"
        },
        defaultValue: 1
      },
      difficultyId: {
        type: Sequelize.INTEGER,
        references: {
          model: "difficulties",
          key: "id"
        }
      },
      userId: {
        type: Sequelize.INTEGER,
        references: {
          model: "users",
          key: "id"
        },
        defaultValue: 1
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("races");
  }
};
