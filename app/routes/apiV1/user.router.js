'use strict';

const authController = require('../../controllers/user.controller');
const authSchema = require('./schema/user.schema');

const joiMiddleware = require('./middleware/joi.mw');
const jwtMiddleware = require('./middleware/jwt.mw');

const router = require('express').Router();

router.post(
    '/register',
    joiMiddleware(authSchema.registration),
    authController.register
);

router.post(
    '/login',
    joiMiddleware(authSchema.login),
    authController.login
);

router.get(
    '/profile',
    jwtMiddleware,
    authController.profile
);

module.exports = router;