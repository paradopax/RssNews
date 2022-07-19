'use strict';

const usercategoryController = require('../../controllers/usercategory.controller');
const usercategorySchema = require('./schema/usercategory.schema');

const joiMiddleware = require('./middleware/joi.mw');
const jwtMiddleware = require('./middleware/jwt.mw');

const router = require('express').Router();

router.post(
    '/',
    [
        jwtMiddleware,
        joiMiddleware(usercategorySchema.onlyname),
    ],
    usercategoryController.create
);

router.put(
    '/',
    [
        jwtMiddleware,
        joiMiddleware(usercategorySchema.complete),
    ],
    usercategoryController.update
);

router.delete(
    '/',
    [
        jwtMiddleware,
        joiMiddleware(usercategorySchema.onlyid),
    ],
    usercategoryController.delete
);

module.exports = router;