const dotenv = require('dotenv')
dotenv.config();

const pexelsToken = process.env.PEXELS_SECRET

const getToken = () => {
    return pexelsToken;
}

module.exports = getToken;