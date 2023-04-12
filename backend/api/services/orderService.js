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

    static async addDishToOrder(orderId, dishId, quantity = 1) { // Adiciona pratos ao pedido usando o id do pedido
        try {
            const order = await db.Order.findByPk(orderId);
            const dish = await db.Dish.findByPk(dishId);
            await order.addDish(dish, { through: { quantity } });
        } catch (error) {
            throw error;
        }
    }

    static async getOrderAndDishes(user_id) {
        try {
            const order = await db.Order.findAll({
                where: {
                    user_id,
                    status: 'open'
                },
                include: [{ model: db.Dish, through: { attributes: ['quantity'] } }]
            })
            return order;
        } catch (error) {
            throw error;
        }
    }

    static async countTotalDishesValue(user_id) {
        try {
            const orders = await db.Order.findAll({
                where: {
                    user_id,
                    status: 'open'
                },
                include: {
                    model: db.Dish,
                    attributes: ['price']
                }
            });

            let totalPrice = 0;
            orders.forEach(order => {
                order.Dishes.forEach(dish => {
                    totalPrice += parseFloat(dish.price);
                });
            });

            return totalPrice.toFixed(2);
        } catch (error) {
            throw error
        }
    }

    static async removeDishFromOrder(orderId, dishId) {
        try {
            const order = await db.Order.findByPk(orderId);
            await order.removeDish(dishId);
            return { message: 'Dish removed from order successfully.' };
        } catch (error) {
            throw error;
        }
    }

}

module.exports = orderService;
