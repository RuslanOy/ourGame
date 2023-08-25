const router = require('express').Router();
const { Question, Theme } = require('../../db/models');

//вывести все карточки вопросов
router.get('/', async (req, res) => {
  try {
    const questions = await Question.findAll({ include: { model: Theme } });
    const arrayOfThemes = questions.map((el) => el.Theme.title);
    const uniqueArrayOfThemes = [...new Set(arrayOfThemes)];
    const arrayToSend = uniqueArrayOfThemes.map((el) => [
      ...questions.filter((elem) => elem.Theme.title === el),
    ]);
    res.json(arrayToSend);
  } catch ({ message }) {
    res.json({ message });
  }
});

module.exports = router;