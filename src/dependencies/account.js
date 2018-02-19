'use strict'

const bclient = require('../lib/bclient')({
    'key': process.env.B_KEY,
    'secret': process.env.B_SECRET,
    'host': process.env.B_HOST
});

module.exports = () => {
    const deps = {
        get controller() {
            return require('../controllers/account')(bclient.account);
        }
    }
    return deps;
}