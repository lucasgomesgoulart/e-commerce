const UserService = require('../services/userService')

class UserController {

    static async login(req, res) {
        const { username, password } = req.body
        try {
            const userLogged = await UserService.login(username, password)
            return res.status(200).json({ userLogged })
        } catch (error) {
            return res.status(500).json({ message: error.message })
        }
    }

    static async createUser(req, res) {
        const userToCreate = req.body
        try {
            const newUser = await UserService.createUser(userToCreate)
            return res.status(201).json({
                message: 'User created sucessfully',
                data: newUser
            })
        } catch (error) {
            console.log(userToCreate)
            console.log(error)
            return res.status(500).json({ message: error.message })
        }
    }

    static async updateUser(req, res) {
        const { id } = req.params
        const userToUpdate = req.body
        try {
            const updateUser = await UserService.updateUser(userToUpdate, id)
            return res.status(201).json({
                message: 'User updated sucessfully',
                data: updateUser
            })
        } catch (error) {
            res.send(500).json({ message: error.message })
        }
    }

    static async deleteUser(req, res) {
        const { id } = req.params
        try {
            const userToDelete = await UserService.deleteUser(id)
            return res.status(200).json({
                message: 'User deleted succesfully'
            })
        } catch (error) {
            return res.status(500).json({ message: error.message })
        }
    }
}

module.exports = UserController
