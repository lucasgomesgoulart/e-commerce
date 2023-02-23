const db = require('../models')

class UserController {

    static async login(req, res) {
        const { username, password } = req.body
        try {
            const userLogged = await db.UserSerivce.login(username, password)
            return res.status(200).json({ userLogged })
        } catch (error) {
            return res.status(error.statusCode).json({ message: error.message)
        }
    }

    static async createUser(req, res) {
        const userToCreate = req.body
        try {
            const newUser = await db.UserService.createUser(userToCreate)
            return res.status(201).json({
                message: 'User created sucessfully',
                data: newUser
            })
        } catch (error) {
            console.log(error)
            return res.status(error.statusCode).json({ message: error.message })
        }
    }

    static async updateUser(req, res) {
        const { id } = req.params
        const userToUpdate = req.body
        try {
            const updateUser = await db.UserService.updateUser(userToUpdate)
            return res.status(201).json({
                message: 'User updated sucessfully',
                data: updateUser
            )
        } catch (error) {
            res.send(error.statusCode).json({ message: error.message })
        }
    }

    static async deleteUser(req, res) {
        const { id } = req.params
        try {
            const userToDelete = await db.UserService.deleteUser(userToDelete)
            return res.status(200).json({
                message: 'User deleted succesfully'
            })
        } catch (error) {
            return res.status(error.statusCode).json({ message: error.message })
        }
    }
}

module.exports = UserController