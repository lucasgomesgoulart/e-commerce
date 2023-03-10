const orderService = require('../services/orderService');

const OrderController = {

  async create(req, res) {
    const order = req.body
    try {
      const newOrder = await orderService.createOrder(order);
      return res.status(201).json(newOrder);
    } catch (error) {
      console.error(error);
      return res.status(error.statusCode || 500).json({ message: error.message });
    }
  },

  async update(req, res) {
    try {
      const id_order = req.params.id;
      const updatedOrder = req.body
      const orderToUpdate = await orderService.updateOrder(id_order, updatedOrder);
      if (!orderToUpdate) {
        return res.status(404).json({ error: 'Order not found' });
      }
      return res.status(200).json(orderToUpdate);
    } catch (error) {
      console.error(error);
      return res.status(error.statusCode || 500).json({ message: error.message });
    }
  },

  async delete(req, res) {
    try {
      const id_order = req.params.id
      const deletedOrder = await orderService.deleteOrder(id_order);
      if (!deletedOrder) {
        return res.status(404).json({ error: 'Order not found' });
      }
      return res.status(200).json(deletedOrder);
    } catch (error) {
      console.error(error);
      return res.status(error.statusCode || 500).json({ message: error.message });
    }
  }

};

module.exports = OrderController;
