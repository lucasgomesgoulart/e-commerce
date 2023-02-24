const db = require('../models');
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

require('dotenv').config()


class UserService {

    static async login(username, password) {
        try {
            const userFind = await db.User.findOne({ where: { username } })
            if (!userFind) {
                throw new Error('User not found')
            }
            if (await bcrypt.compare(password, userFind.password)) {
                const token = jwt.sign({ id: userFind.id }, process.env.JWT_SECRET);
                return { id: userFind.id, token }
            } else {
                throw new Error('Wrong password');
            }
        } catch (error) {
            console.log(error);
            throw error;
        }
    }


    static async createUser(userToCreate) {
        try {
            const newUser = await db.User.create(userToCreate)
            return newUser;
        } catch (error) {
            throw error;
        }
    }

    static async updateUser(userToUpdate, id) {
        if (!userToUpdate || !id) return { message: 'User not found' }
        try {
            const userFound = await db.User.findByPk(id)
            if (!userFound) {
                throw new Error('User not found')
            }
            const updatedUser = await db.Users.update(userToUpdate, { where: { id } })
            return updatedUser
        } catch (error) {
            throw error
        }
    }

    static async deleteUser(id) {
        if (!id) return { message: 'User not found' }
        try {
            const userFound = await db.User.findByPk(id)
            const deletedUser = await db.User.destroy({where:{id}})
            return { deletedUser, userFound }
        } catch (error) {
            throw error;
        }
    }

}

module.exports = UserService;