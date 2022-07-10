'use strict';

const authController = require('../../controllers/auth.controller');

const router = require('express').Router;

router.post('/register', authController.register);

router.post('/login', authController.login);

router.get('/profile', authController.profile);

module.exports = router;
