'use strict';
const {Theme} = require('../models')

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await Theme.bulkCreate(
      [
        {
          title: 'Тема 1',
        },
        {
          title: 'Тема 2',
        },
        {
          title: 'Тема 3',
        },
      ]
    )
  },

  async down (queryInterface, Sequelize) {
    await Theme.destroy({where: {}});
  }
};
