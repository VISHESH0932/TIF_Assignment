const router = require('express').Router();
const { addMember, removeMember, getMembers } = require('../controllers/member.controller');
const { auth } = require('../middlewares/auth.middleware');

router.post('/', auth, addMember);
router.delete('/:id', auth, removeMember);
router.get('/:id', getMembers);

module.exports = router;
