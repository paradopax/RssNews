'use strict';

const router = require('express').Router;

router.use(function timeLog(req, res, next) {
    console.log(`Requested ${req.originalUrl} From ${req.headers['x-forwarded-for']} Time: ${Date.now()}`);
    next();
});

router.use('/auth', authRouter);

module.exports = router;