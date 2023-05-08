const db = require('../models');

class RestaurantAddressService {

    static async createAddress(restaurantAddressToCreate) {
        try {
            const newRestaurantAddress = await db.restaurant_address.create(restaurantAddressToCreate);
            return newRestaurantAddress;
        } catch (error) {
            throw error;
        }
    }

    static async update(id_restaurant_address, restaurantAddressToUpdate) {
        if (!id_restaurant_address || !restaurantAddressToUpdate) {
            return { message: 'Restaurant address not found' };
        }
        try {
            const updatedRestaurantAddress = await db.restaurant_address.update(restaurantAddressToUpdate, {
                where: { id: id_restaurant_address },
            });
            return updatedRestaurantAddress;
        } catch (error) {
            throw error;
        }
    }

    static async findAllRestaurantAddresses() {
        try {
            const allRestaurantAddresses = await db.restaurant_address.findAll()
            return allRestaurantAddresses;
        } catch (error) {
            throw error;
        }
    }

    static async findRestaurantAddressById(id_restaurant_address) {
        if (!id_restaurant_address) {
            return { message: 'Restaurant address not found' };
        }
        try {
            const restaurantAddress = await db.restaurant_address.findByPk(id_restaurant_address);
            return restaurantAddress;
        } catch (error) {
            throw error;
        }
    }

    static async delete(id_restaurant_address) {
        if (!id_restaurant_address) {
            return { message: 'Restaurant address not found' };
        }
        try {
            await db.restaurant_address.destroy({ where: { id: id_restaurant_address } });
            return { message: 'Restaurant address deleted' };
        } catch (error) {
            throw error;
        }
    }
}

module.exports = RestaurantAddressService;
