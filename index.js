'use strict';

const config = require('./config');
const app = require('./app');

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});