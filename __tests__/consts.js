require('dotenv').config();

const port = process.env.PORT || 3000;
const bclient = require('../src/lib/bclient')({
    key: process.env.B_KEY,
    secret: process.env.B_SECRET,
    host: process.env.B_HOST
});

module.exports = { port, bclient };