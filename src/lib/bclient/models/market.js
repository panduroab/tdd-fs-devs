const https = require('https');

module.exports = params => {
    if (!params.httpClient) {
        return new Error("'httpClient' is required");
    }
    const { httpClient } = params;
    return {
        ticker: () => {
            let request_path = '/v3/ticker';
            return httpClient.get(request_path)
                .then(res => {
                    return res.data.payload;
                });
        }
    }
}