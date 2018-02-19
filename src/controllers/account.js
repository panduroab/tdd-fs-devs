'use strict'

const router = require('express').Router();

module.exports = (services) => {

    function getBalance(req, res, next) {
        return services.balance()
            .then(balance => res.json(balance))
            .catch(next);
    }

    return {
        routes: () => {
            router.get('/balance', getBalance);
            return router;
        }
    }
}