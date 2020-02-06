"use strict";
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("material-hixe-users", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      materialId: {
        type: Sequelize.INTEGER,
        references: {
          model: "materials",
          key: "id"
        },
        defaultValue: 1
      },
      userId: {
        type: Sequelize.INTEGER,
        references: {
          model: "users",
          key: "id"
        },
        defaultValue: 1
      },
      raceId: {
        type: Sequelize.INTEGER,
        references: {
          model: "races",
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
    return queryInterface.dropTable("material-hixe-users");
  }
};
