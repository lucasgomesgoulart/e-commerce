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
}

module.exports = orderService;