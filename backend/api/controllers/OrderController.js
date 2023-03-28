const orderService = require('../services/orderService');

const OrderController = {

  async createOrder(req, res) {
    const { restaurant_id, status, dishes } = req.body
    try {
      const newOrder = await orderService.create({ user_id: req.admin.id, restaurant_id, status })

      for (const dish of dishes) {
        await newOrder.addDish(dish.id, { through: { quantity: dish.quantity || 1 } });
      }
      return res.status(201).json(newOrder);
    } catch (error) {
      console.error(error);
      return res.status(error.statusCode || 500).json({ message: error.message });
    }
  }
};

module.exports = OrderController;
