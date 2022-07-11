'use strict';

const authController = require('../../controllers/user.controller');
const authSchema = require('./schema/user.schema');
const joiMiddleware = require('./middleware/joi.mw');

const router = require('express').Router();

router.post(
    '/register',
    joiMiddleware.validation(authSchema.registration),
    authController.register
);

router.post(
    '/login',
    joiMiddleware.validation(authSchema.login),
    authController.login
);

// maybe useless
router.get('/profile', authController.profile);

module.exports = router;