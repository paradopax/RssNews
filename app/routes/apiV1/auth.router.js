'use strict';

const authController = require('../../controllers/auth.controller');
const authSchema = require('./schema/auth.schema');
const validationMiddleware = require('./middleware/joi.mw');

const router = require('express').Router();

router.post(
    '/register',
    validationMiddleware.validation(authSchema.registration),
    authController.register
);

router.post('/login', authController.login);

router.get('/profile', authController.profile);

module.exports = router;