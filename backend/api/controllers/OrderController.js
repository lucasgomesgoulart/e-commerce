const { request } = require('express');
const orderService = require('../services/orderService');

const OrderController = {

  async createOrder(req, res) {
    const { restaurant_id, status, dishes } = req.body
    const userLoggedId = req.admin
    console.log(userLoggedId)
    const orderData = { ...req.body, user_id: userLoggedId }
    try {
      const newOrder = await orderService.create(orderData)
      const orderId = newOrder.id // Armazena o id do pedido criado

      for (const dish of dishes) {
        await orderService.addDishToOrder(orderId, dish.id, dish.quantity || 1); // Adiciona pratos ao pedido usando o id do pedido
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
  },

  async countTotalDishesValue(req, res) {
    const user_id = req.admin
    try {
      const total = await orderService.countTotalDishesValue(user_id)
      return res.status(200).json({ total })
    } catch (error) {
      return res.status(500).json({ message: error.message })
    }
  },

  async removeDishFromOrder(req, res) {
    const { orderId, dishId } = req.body
    try {
      const result = await orderService.removeDishFromOrder(orderId, dishId);
      res.json(result);
    } catch (error) {
    }
  }
}

module.exports = OrderController;
