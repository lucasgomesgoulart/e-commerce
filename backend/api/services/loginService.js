const db = require('../models')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
require('dotenv').config()

class loginService {
    static async login(email, password) {
        console.log(email, password)
        try {
            const userFind = await db.User.findOne({ where: { email } })
            // console.log(userFind.id, userFind.email, userFind.password)

            if (await bcrypt.compare(password, userFind.password)) {
                const token = jwt.sign({ id: userFind.id }, process.env.JWT_SECRET)
                return ({ id: userFind.id, token: token })
            } else {
                throw new Error('Wrong password')
            }
        } catch (err) {
            console.log(err)
            throw err;
        }
    }

    static async validateToken(token) {
        try {
            const decoded = jwt.verify(token, process.env.JWT_SECRET)
            console.log(decoded)
            return decoded.id
        } catch (err) {
            console.log(err)
            throw err
        }
    }
}

module.exports = loginService;