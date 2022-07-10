'use strict';

const express = require('express');

let app = express();

app.use(express.json());
//app.use(express.urlencoded({ extended: true }));

// require apiV1 routes
const apiV1 = require('./routes/api.v1');

app.use('/v1', apiV1);

module.exports = app;