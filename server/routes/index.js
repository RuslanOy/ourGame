const router = require('express').Router();

const authApiRouter = require('./api/auth.api.router');
const questionApiRouter = require('./api/question.api.router');

router.use('/api/auth', authApiRouter);
router.use('/api/questions', questionApiRouter);

module.exports = router;
