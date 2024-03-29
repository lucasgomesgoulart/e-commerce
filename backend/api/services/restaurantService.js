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

  static async findOneRestaurant(id) {
    if (!id) {
      return { message: 'Restaurant not found' };
    }
    try {
      const restaurant = await db.Restaurant.findOne(id);
      return restaurant;
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

  static async findAllRestaurants() {
    try {
      const response = await db.Restaurant.findAll()
      return response
    } catch (error) {
      throw error;
    }
  }

  static async findMyRestaurants(user_id) {
    try {
      console.log(user_id);
      const response = await db.Restaurant.findAll({
        where: {
          user_id: user_id
        }
      })
      return response
    } catch (error) {
      throw error;
    }
  }

  static async findDishes(id_restaurant) {
    if (!id_restaurant) return { message: 'Restaurant not found' };
    try {
      const findDishes = await db.Restaurant.findByPk(id_restaurant, {
        include: {
          model: db.Dish,
          as: 'dishes'
        }
      })
      return findDishes
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
