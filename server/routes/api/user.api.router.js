const router = require('express').Router();
const { User } = require('../../db/models');

//Получить очки пользователя
router.put('/:id', (req, res) => {
  try {
    const { score } = req.body;
    const { id } = req.params;

    const user = User.update({ score: score }, { where: { id } });
    if (user > 0) {
      res.json({ message: 'success' });
      return;
    }
    res.json({ score: user.score });
  } catch (error) {
    res.json({ message: error.message });
  }
});

module.exports = router;
