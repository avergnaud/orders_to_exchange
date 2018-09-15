require('dotenv').load();

let config = {
    url: 'https://api.kraken.com',
    version: '0',
    key: process.env.KRAKEN_API_KEY,
    secret: process.env.KRAKEN_API_SECRET,
    otp: null,
    timeoutMS: 30000
};

module.exports.config = config;
