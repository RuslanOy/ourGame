'use strict';
const {User} = require('../models')
const bcrypt = require('bcrypt');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await User.bulkCreate(
      [
        {
          name: 'Катя',
          email: 'Kate@mail.ru',
          password: await bcrypt.hash('123', 10),
          score: 0
        }
      ]
    )
  },

  async down (queryInterface, Sequelize) {
    await User.destroy({where: {}});
  }
};
