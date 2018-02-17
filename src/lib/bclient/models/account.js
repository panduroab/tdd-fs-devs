const https = require('https');

module.exports = params => {
    if (!params.httpClient) {
        return new Error("'httpClient' is required");
    }
    const { httpClient, security } = params;
    return {
        balance: () => {
            let request_path = '/v3/balance';
            return httpClient.get(request_path, {
                'headers': { 'Authorization': security.buildSignature(request_path) }
            })
                .then(res => {
                    return res.data.payload;
                });
        },
        trades: () => {
            let request_path = '/v3/user_trades/';
            return httpClient.get(request_path, {
                'headers': { 'Authorization': security.buildSignature(request_path) }
            })
                .then(res => {
                    return res.data.payload;
                });
        },
        orderById: (oid) => {
            let request_path = `/v3/order_trades/${oid}`;
            return httpClient.get(request_path, {
                'headers': { 'Authorization': security.buildSignature(request_path) }
            })
                .then(res => {
                    return res.data.payload;
                });
        }
    }
}