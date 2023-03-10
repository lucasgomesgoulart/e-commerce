const db = require('../models');

class RestaurantService {
  static async create(restaurantToCreate) {
    try {
      const newRestaurant = await db.Restaurant.create(restaurantToCreate);
      return newRestaurant;
    } catch (error) {
      throw error;
    }
  }

  static async update(id_restaurant, restaurantToUpdate) {
    if (!id_restaurant || !restaurantToUpdate) {
      return { message: 'Restaurant not found' };
    }
    try {
      const updatedRestaurant = await db.Restaurant.update(restaurantToUpdate, {
        where: { id: id_restaurant },
      });
      return updatedRestaurant;
    } catch (error) {
      throw error;
    }
  }

  static async delete(id_restaurant) {
    if (!id_restaurant) {
      return { message: 'Restaurant not found' };
    }
    try {
      await db.Restaurant.destroy({ where: { id: id_restaurant } });
      return { message: 'Restaurant deleted' };
    } catch (error) {
      throw error;
    }
  }
}

module.exports = RestaurantService;
