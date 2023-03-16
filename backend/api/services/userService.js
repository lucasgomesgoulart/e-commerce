const db = require('../models')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
class UserService {

    static async createUser(userToCreate) {
        console.log(userToCreate.password)
        try {
            const userPasswordHash = bcrypt.hashSync(userToCreate.password, 8)
            userToCreate.password = userPasswordHash
            const newUser = await db.User.create(userToCreate)

            return newUser;
        } catch (error) {
            throw error;
        }
    }

    static async findUserRestaurants(id_user){
        if(!id_user) return {message: 'User not found'}
        try {
            const userRestaurant = await db.User.findByPk(id_user,{
                // esse include busca o usuário que foi passado nos parametros, e busca todos os restaurantes vinculados ao usuario.
                include: {
                    model: db.Restaurant,
                    as: 'restaurants'
                }
            });
            return userRestaurant
        } catch (error) {
            throw error;
        }
    }

    static async updateUser(id_user, userToUpdate) {
        if (!id_user || !userToUpdate) return { message: 'User not found' }
        try {
            const updatedUser = await db.User.update(userToUpdate, { where: { id_user } });
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