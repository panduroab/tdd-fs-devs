const axios = require('axios');

module.exports = params => {
    if (!params.key || !params.secret || !params.host) {
        return new Error("'key' and 'secret' params are required");
    }

    const security = require('./security')(params);
    axios.defaults.baseURL = params.host;

    const account = require('./models/account')({
        httpClient: axios,
        security
    });
    const market = require('./models/market')({
        httpClient: axios
    });

    return {
        security,
        account,
        market
    };
};