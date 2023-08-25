const router = require('express').Router();
const bcrypt = require('bcrypt');
const { User } = require('../../db/models');

//Регистрация юзера
router.post('/registration', async (req, res) => {
  try {
    let user;
    const { name, email, password } = req.body;
    if (name.trim() && email.trim() && password.trim()) {
      user = await User.findOne({ where: { email } });
      if (user) {
        res.json({ message: 'Данная почта уже существует' });
        return;
      } else {
        const hash = await bcrypt.hash(req.body.password, 10);
        user = await User.create({ name, email, password: hash, score: 0 });
        req.session.user_id = user.id;
        res.json(user);
        return;
      }
    } else {
      res.json({ message: 'Заполните все поля' });
    }
  } catch ({ message }) {
    res.json({ message });
  }
});

//Авторизация юзера
router.post('/authorization', async (req, res) => {
  try {
    let user;
    const { email, password } = req.body;
    if (email.trim() && password.trim()) {
      user = await User.findOne({ where: { email } });
      if (user && (await bcrypt.compare(password, user.password))) {
        req.session.user_id = user.id;
        res.json(user);
        return;
      } else {
        res.json({ message: 'Неверный логин или пароль' });
        return;
      }
    } else {
      res.json({ message: 'Заполните все поля!' });
      return;
    }
  } catch ({ message }) {
    res.json({ message });
  }
});

router.get('/check', async (req, res) => {
  try {
    if (req.session.user_id) {
      const user = await User.findOne({ where: { id: req.session.user_id } });
      res.json(user);
      return;
    }
    res.json(null);
  } catch ({ message }) {
    res.json({ message });
  }
});

// удаление сессии на сервере
router.get('/logout', (req, res) => {
  req.session.destroy((error) => {
    if (error) {
      return res.status(500).json({ message: 'Ошибка при удалении сессии' });
    }
    console.log(123123);

    res.clearCookie('user_sid').json({message: 'success'}) // серверное удаление куки по имени
  });
});

module.exports = router;
