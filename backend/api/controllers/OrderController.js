const orderService = require('../services/orderService');

const OrderController = {

  async createOrder(req, res) {
    const { user_id, restaurant_id, status, dishes } = req.body
    try {
      const newOrder = await orderService.create({ user_id, restaurant_id, status })

      for (dish in dishes) {
        await newOrder.addDish(dish.id, { through: { quantity: dish.quantity } })
      }
      return res.status(201).json(newOrder);
    } catch (error) {
      console.error(error);
      return res.status(error.statusCode || 500).json({ message: error.message });
    }
  }
};

module.exports = OrderController;