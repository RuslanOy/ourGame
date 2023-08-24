'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Questions', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      question: {
        allowNull: false,
        type: Sequelize.TEXT
      },
      answer: {
        allowNull: false,
        type: Sequelize.TEXT
      },
      price: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      theme_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'Themes',
          key: 'id'
        },
        onDelete: 'CASCADE',
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
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Questions');
  }
};