const db = require('../models');

class DishService {
  static async createDish(dishToCreate) {
    try {
      const newDish = await db.Dish.create(dishToCreate);
      return newDish;
    } catch (error) {
      throw error;
    }
  }

  static async findDishById(dishId) {
    try {
      const dish = await db.Dish.findByPk({
        where: { id: dishId },
        include: [
          { model: db.Restaurant, as: 'restaurant', include: { model: db.User, as: 'user' } },
        ],
      });

      return dish;
    } catch (error) {
      throw error;
    }
  }

  static async updateDish(dishId, dishToUpdate) {
    if (!dishId || !dishToUpdate) return { message: 'Dish not found' };
    try {
      const updatedDish = await db.Dish.update(dishToUpdate, { where: { id: dishId } });
      return updatedDish;
    } catch (error) {
      throw error;
    }
  }

  static async deleteDish(dishId) {
    if (!dishId) return { message: 'Dish not found' };
    try {
      await db.Dish.destroy({ where: { id: dishId } });
      return { message: 'Dish deleted' };
    } catch (error) {
      throw error;
    }
  }
}

module.exports = DishService;
