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

    static async updateUser(id_user, userToUpdate) {
        if (!id_user || !userToUpdate) return { message: 'User not found' }
        try {
          const updatedUser = await db.User.update(userToUpdate, {where: {id_user}});
          return updatedUser;
        } catch (error) {
          throw error;
        }
      }
      

    static async deleteUser(id_user) {
        if (!id_user) return { message: 'User not found' }
        try {
            await db.User.destroy({ where: { id_user: id_user } })
            return { message: 'User deleted' }
        } catch (error) {
            throw error;
        }
    }

}

module.exports = UserService;