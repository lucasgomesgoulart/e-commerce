const dotenv = require('dotenv')
const jwt = require('jsonwebtoken');

dotenv.config();

const verifyToken = (req, res, next) => {

    const authHeader = req.headers['authorization'];

    const token = authHeader && authHeader.split(' ')[1];

    if (token == null) return res.sendStatus(401);

    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
        if (err) return res.sendStatus(403);
        req.admin = decoded.id
        // console.log(decoded)
        // console.log(decoded.req.admin)
        next();
    })
}

module.exports = verifyToken;