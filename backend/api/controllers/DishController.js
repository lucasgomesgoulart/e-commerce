const dishService = require('../services/dishService');

const DishController = {
  async create(req, res) {
    const dish = req.body
    try {
      const newDish = await dishService.createDish(dish);
      return res.status(201).json(newDish);
    } catch (error) {
      console.error(error);
      return res.status(error.statusCode || 500).json({ message: error.message });
    }
  },

  async findById(req, res) {
    try {
      const id = req.params.id;
      const dish = await dishService.findDishById(id);
      if (!dish) {
        return res.status(404).json({ error: 'Dish not found' });
      }
      return res.status(200).json(dish);
    } catch (error) {
      console.error(error);
      return res.status(error.statusCode || 500).json({ message: error.message });
    }
  },

  async update(req, res) {
    try {
      const id = req.params.id;
      const updatedDish = req.body
      const dishToUpdate = await dishService.updateDish(id, updatedDish);
      if (!dishToUpdate) {
        return res.status(404).json({ error: 'Dish not found' });
      }
      return res.status(200).json(dishToUpdate);
    } catch (error) {
      console.error(error);
      return res.status(error.statusCode || 500).json({ message: error.message });
    }
  },

  async delete(req, res) {
    try {
      const id = req.params.id;
      const deletedDish = await dishService.deleteDish(id);
      if (!deletedDish) {
        return res.status(404).json({ error: 'Dish not found' });
      }
      return res.status(200).json(deletedDish);
    } catch (error) {
      console.error(error);
      return res.status(error.statusCode || 500).json({ message: error.message });
    }
  }
};

module.exports = DishController;
