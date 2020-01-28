'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Difficulties', [{
        name: 'Très facile',
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        name: 'Facile',
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        name: 'Moyen',
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        name: 'Difficile',
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        name: 'Très difficile',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {})
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Difficulties', null, {});
  }
};