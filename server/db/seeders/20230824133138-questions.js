'use strict';
const {Question} = require('../models')

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await Question.bulkCreate(
      [
        {
          question: 'Вопрос 1',
          answer: 'Ответ 1',
          price: 200,
          theme_id: 1,
        },
        {
          question: 'Вопрос 2',
          answer: 'Ответ 2',
          price: 400,
          theme_id: 1,
        },
        {
          question: 'Вопрос 3',
          answer: 'Ответ 3',
          price: 600,
          theme_id: 1,
        },
        {
          question: 'Вопрос 1',
          answer: 'Ответ 1',
          price: 200,
          theme_id: 2,
        },
        {
          question: 'Вопрос 2',
          answer: 'Ответ 2',
          price: 400,
          theme_id: 2,
        },
        {
          question: 'Вопрос 3',
          answer: 'Ответ 3',
          price: 600,
          theme_id: 2,
        },
        {
          question: 'Вопрос 1',
          answer: 'Ответ 1',
          price: 200,
          theme_id: 3,
        },
        {
          question: 'Вопрос 2',
          answer: 'Ответ 2',
          price: 400,
          theme_id: 3,
        },
        {
          question: 'Вопрос 3',
          answer: 'Ответ 3',
          price: 600,
          theme_id: 3,
        },
      ]
    )
  },

  async down (queryInterface, Sequelize) {
    await User.destroy({where: {}});
  }
};
