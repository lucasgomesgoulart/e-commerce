const orderService = require('../services/orderService');

const OrderController = {

  async createOrder(req, res) {
    const { restaurant_id, status, dishes } = req.body
    const userLoggedId = req.admin
    console.log(userLoggedId)
    const orderData = { ...req.body, user_id: userLoggedId }
    try {
      const newOrder = await orderService.create(orderData)

      for (const dish of dishes) {
        await newOrder.addDish(dish.id, { through: { quantity: dish.quantity || 1 } });
      }
      return res.status(201).json(newOrder);
    } catch (error) {
      console.error(error);
      return res.status(error.statusCode || 500).json({ message: error.message });
    }
  },

  async getOrderAndDishes(req, res) {
    const user_id = req.admin
    try {
      const order = await orderService.getOrderAndDishes(user_id)
      return res.status(200).json(order)
    } catch (error) {
      return res.status(500).json({ message: error.message })
    }
  }
}

module.exports = OrderController
