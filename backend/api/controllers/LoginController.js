const loginService = require('../services/loginService')

class LoginController {
    static async login(req, res) {
        const { email, password } = req.body
        try {
            const userLogged = await loginService.login(email,password)
            console.log(userLogged)
            return res.status(200).json({ userLogged })
        } catch (error) {
            return res.status(500).json({ error: error })
        }
    }
}

module.exports = LoginController