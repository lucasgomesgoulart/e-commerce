const db = require('../models')

class orderService {

    static async create(order) {
        try {
            const orderToCreate = await db.Order.create(order)
            return orderToCreate;
        } catch (error) {
            throw error
        }
    }

    static async getOrderAndDishes(user_id) {
        try {
            const order = await db.Order.findAll({
                where: {
                    user_id
                },
                include: [{ model: db.Dish, through: { attributes: ['quantity'] } }]
            })
            return order;
        } catch (error) {
            throw error;
        }
    }
}

module.exports = orderService;