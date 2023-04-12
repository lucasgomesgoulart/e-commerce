const dotenv = require('dotenv')
dotenv.config();


const getPexelsToken = async (req, res, next) => {
  try {
    const token = await pexelsService.getToken();
    req.pexelsToken = token;
    next();
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

module.exports = getPexelsToken;
