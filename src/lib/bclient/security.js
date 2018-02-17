const crypto = require('crypto');
module.exports = params => {
    return {
        buildSignature: (request_path) => {
            let { key, secret, host } = params;
            let nonce = new Date().getTime();
            let http_method = "GET";
            let json_payload = "";
            let Data = nonce + http_method + request_path + json_payload;
            let signature = crypto.createHmac('sha256', secret).update(Data).digest('hex');
            let auth_header = "Bitso " + key + ":" + nonce + ":" + signature;
            return auth_header;
        }
    };
};