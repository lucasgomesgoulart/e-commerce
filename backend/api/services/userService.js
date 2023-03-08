const db = require('../models')

class UserService {

    static async createUser(userToCreate) {
        try {
            const newUser = await db.User.create(userToCreate)
            return newUser;
        } catch (error) {
            throw error;
        }
    }

    static async updateUser(id, userToUpdate) {
        if(!id || userToUpdate) return {message: 'User not found'}
        try {
            const updatedUser = await db.Users.update(userToUpdate)
            return updatedUser;
        } catch (error) {
            throw error;
        }
    }

    static async deleteUser(id){
        if(!id) return {message: 'User not found'}
        try {
            await db.Users.destroy(id)
            return {message: 'User deleted'}
        } catch (error) {
            throw error;
        }
    }

}

module.exports = UserService;