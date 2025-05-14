const router = require('express').Router();
const { createCommunity, getCommunities, getCommunity, getMyCommunities ,getOwnedCommunities} = require('../controllers/community.controller');
const { auth } = require('../middlewares/auth.middleware');

router.post('/', auth, createCommunity);
router.get('/', getCommunities);
router.get('/me/member', auth, getMyCommunities);
router.get('/me/owner', auth, getOwnedCommunities);
router.get('/:id/members', getCommunity);

module.exports = router;
