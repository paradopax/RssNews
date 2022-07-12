'use strict';

const sourceController = require('../../controllers/source.controller');
const subscriberController = require('../../controllers/subscriber.controller');
const sourceSchema = require('./schema/source.schema');

const joiMiddleware = require('./middleware/joi.mw');
const jwtMiddleware = require('./middleware/jwt.mw');

const router = require('express').Router();

router.post(
    '/add',
    [
        jwtMiddleware,
        joiMiddleware(sourceSchema.url),
    ],
    sourceController.add
);

router.post(
    '/follow',
    [
        jwtMiddleware,
        joiMiddleware(sourceSchema.id),
    ],
    subscriberController.follow
)

router.post(
    '/unfollow',
    [
        jwtMiddleware,
        joiMiddleware(sourceSchema.id),
    ],
    subscriberController.unfollow
)

module.exports = router;