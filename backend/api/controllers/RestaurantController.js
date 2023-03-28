const restaurantService = require('../services/restaurantService');

const RestaurantController = {

  async create(req, res) {
    const restaurant = req.body
    try {
      const newRestaurant = await restaurantService.create(restaurant);
      return res.status(201).json(newRestaurant);
    } catch (error) {
      console.error(error);
      return res.status(error.statusCode || 500).json({ message: error.message });
    }
  },

  async findAllRestaurants(req, res) {
    try {
      const allRestaurants = await restaurantService.findAllRestaurants();
      return res.status(200).json({ allRestaurants })
    } catch (error) {
      return res.status(500).json({ message: error.message })
    }
  },

  async update(req, res) {
    try {
      const id_restaurant = req.params.id;
      const updatedRestaurant = req.body
      const restaurantToUpdate = await restaurantService.update(id_restaurant, updatedRestaurant);
      if (!restaurantToUpdate) {
        return res.status(404).json({ error: 'Restaurant not found' });
      }
      return res.status(200).json(restaurantToUpdate);
    } catch (error) {
      console.error(error);
      return res.status(error.statusCode || 500).json({ message: error.message });
    }
  },

  async findDishes(req, res) {
    const id_user = req.params.id
    try {
      const findRestaurantDishes = await restaurantService.findDishes(id_user)
      return res.status(200).json(findRestaurantDishes);
    } catch (error) {
      return res.status(error.statusCode || 500).json({ message: error.message });
    }
  },

  async delete(req, res) {
    try {
      const id_restaurant = req.params.id
      const deletedRestaurant = await restaurantService.delete(id_restaurant);
      if (!deletedRestaurant) {
        return res.status(404).json({ error: 'Restaurant not found' });
      }
      return res.status(200).json(deletedRestaurant);
    } catch (error) {
      console.error(error);
      return res.status(error.statusCode || 500).json({ message: error.message });
    }
  }

};

module.exports = RestaurantController;
