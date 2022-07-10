'use strict';

const authController = require('../../controllers/auth.controller');
const authSchema = require('./schema/auth.schema');

const router = require('express').Router();

const joiValidation = (schema) => {
    return (req, res, next) => {
        let validation = schema.validate(req.body);
        if (validation.error) {
            res.send({
                error: validation.error.details.message
            });
            return;
        }
        req.joivalid = validation.value;
        next();
    }
}

router.post('/register', joiValidation(authSchema.registration), authController.register);

router.post('/login', authController.login);

router.get('/profile', authController.profile);

module.exports = router;
