const router = require('express').Router();
const { signup, signin, getMe } = require('../controllers/auth.controller');
const { auth } = require('../middlewares/auth.middleware');

router.post('/signup', signup);
router.post('/signin', signin);
router.get('/me', auth, getMe);

module.exports = router;
