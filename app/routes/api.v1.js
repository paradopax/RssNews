'use strict';

const router = require('express').Router();
const authRouter = require('./apiV1/user.router');
const sourceRouter = require('./apiV1/source.router');

router.use(function timeLog(req, res, next) {
    console.log(`Requested ${req.originalUrl} From ${req.headers['x-forwarded-for']} Time: ${Date.now()}`);
    next();
});

router.use('/user', authRouter);
router.use('/source', sourceRouter);

module.exports = router;