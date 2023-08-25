'use strict';
const { Question } = require('../models');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await Question.bulkCreate([
      {
        question: 'Имя основателя Эльбруса?',
        answer: 'Гоша',
        price: 200,
        theme_id: 1,
      },
      {
        question:
          'Продолжительность обучения, в неделях, Fullstack JavaScript?',
        answer: '12',
        price: 400,
        theme_id: 1,
      },
      {
        question: 'Средняя ЗП выпускников Эльбруса по дынным hh.ru?',
        answer: '141 000',
        price: 600,
        theme_id: 1,
      },
      {
        question: 'Сколько студентов выпустилось за 4,5 года?',
        answer: '1583',
        price: 800,
        theme_id: 1,
      },
      {
        question: 'Сколько всего зверей фигурирует в названиях групп?',
        answer: '17',
        price: 1000,
        theme_id: 1,
      },
      {
        question: 'Что принадлежит тебе, но чаще используют другие?',
        answer: 'Имя',
        price: 200,
        theme_id: 2,
      },
      {
        question: 'Кому мешает мини-юбка?',
        answer: 'Мужчина',
        price: 400,
        theme_id: 2,
      },
      {
        question: 'Что всегда на земле, но никогда не бывает грязным?',
        answer: 'Тень',
        price: 600,
        theme_id: 2,
      },
      {
        question: 'Какой болезнью на земле не болеют?',
        answer: 'Морской',
        price: 800,
        theme_id: 2,
      },
      {
        question: 'Что может путешествовать по миру, оставаясь в углу?',
        answer: 'Штамп в паспорте',
        price: 1000,
        theme_id: 2,
      },
      {
        question: 'Кто снял «Титаник», «Аватар» и «Терминатор»?',
        answer: 'Джеймс Кэмерон',
        price: 200,
        theme_id: 3,
      },
      {
        question:
          'В какой год Марти и Док отправляются в «Назад в будущее, часть XNUMX»?',
        answer: '2015',
        price: 400,
        theme_id: 3,
      },
      {
        question:
          'Что хорошо делал герой Леонардо Дикаприо в фильме "Титаник"?',
        answer: 'Рисовал',
        price: 600,
        theme_id: 3,
      },
      {
        question: 'В каком городе был открыт первый кинотеатр?',
        answer: 'Париж',
        price: 800,
        theme_id: 3,
      },
      {
        question:
          'Какую фразу сказал Груд в конце третьего фильма Стражи галактики?',
        answer: 'Я люблю вас, ребята!',
        price: 1000,
        theme_id: 3,
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await User.destroy({ where: {} });
  },
};
