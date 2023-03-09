const db = require('../models')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
require('dotenv').config()

class loginService {
    static async login(email, password) {
        console.log(email,password)
        try {
            const userFind = await db.User.findOne({ where: { email } })
            if (!userFind) return { message: 'User not found' }
            console.log(userFind.id_user, userFind.email, userFind.password)
            if (await bcrypt.compare(password, userFind.password)) {
                const token = jwt.sign({ id_user: userFind.id_user }, process.env.JWT_SECRET)
                return { id_user: userFind.id_user, token: token }
            } else {
                throw new Error('Wrong password')
            }
        } catch (err) {
            console.log(err)
            throw err;
        }
    }
}

module.exports = loginService;