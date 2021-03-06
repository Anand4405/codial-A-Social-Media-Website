const express = require('express');
const router = express.Router();
const passport = require('passport');
const usersConrtoller = require('../controllers/users_controller');

router.get('/profile/:id',passport.checkAuthectication, usersConrtoller.profile);
router.post('/update/:id',passport.checkAuthectication, usersConrtoller.update);

router.get('/sign-up',usersConrtoller.signUp);
router.get('/sign-in',usersConrtoller.signIn);

router.post('/create',usersConrtoller.create);

// use passport as a middleware to authenticate
router.post('/create-session',passport.authenticate(
    'local',
    {failureRedirect:'/users/sign-in'}

), usersConrtoller.createSession);

router.get('/sign-out',usersConrtoller.destroySession);
module.exports = router;