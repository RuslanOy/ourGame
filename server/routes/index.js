const router = require('express').Router();

const authApiRouter = require('./api/auth.api.router');
const questionApiRouter = require('./api/question.api.router');
const userApiRouter = require('./api/user.api.router');

router.use('/api/auth', authApiRouter);
router.use('/api/questions', questionApiRouter);
router.use('/api/user', userApiRouter);

module.exports = router;
