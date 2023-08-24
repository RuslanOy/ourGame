'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Question extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({Theme}) {
      this.belongsTo(Theme, {foreignKey: 'theme_id'})
    }
  }
  Question.init({
    question: {
      allowNull: false,
      type: DataTypes.TEXT
    },
    answer: {
      allowNull: false,
      type: DataTypes.TEXT
    },
    price: {
      allowNull: false,
      type: DataTypes.INTEGER
    },
    theme_id: {
      allowNull: false,
      type: DataTypes.INTEGER,
      references: {
        model: 'Themes',
        key: 'id'
      },
      onDelete: 'CASCADE',
    },
  }, {
    sequelize,
    modelName: 'Question',
  });
  return Question;
};