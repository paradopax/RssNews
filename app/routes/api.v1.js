'use strict';

const router = require('express').Router();
const authRouter = require('./apiV1/user.router');

router.use(function timeLog(req, res, next) {
    console.log(`Requested ${req.originalUrl} From ${req.headers['x-forwarded-for']} Time: ${Date.now()}`);
    next();
});

router.use('/user', authRouter);

module.exports = router;