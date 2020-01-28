'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('States', [{
        name: 'Brouillon',
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        name: 'Ouverte',
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        name: 'Confirmée',
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        name: 'Annulée',
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        name: 'Effectuée',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {})
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('States', null, {});
  }
};