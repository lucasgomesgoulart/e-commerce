const loginService = require('../services/loginService')

class LoginController {
    static async login(req, res) {
        const { email, password } = req.body
        try {
            const userLogged = await loginService.login(email, password)
            console.log(userLogged)
            return res.status(200).json({ userLogged })
        } catch (error) {
            return res.status(500).json({ error: error })
        }
    }

    static async validateToken(req, res) {
        const authToken = req.headers.authorization
        const token = authToken.split(' ')[1];
        try {
            const validate = await loginService.validateToken(token)
            return res.status(200).json({ validate })
        } catch (error) {
            console.log(token)
            return res.status(500).json(token)
        }
    }
}

module.exports = LoginController