const restaurantAddressService = require('../services/restaurantAddressService');

const RestaurantAddressController = {
    
    async createAddress(req, res) {
        const restaurantAddress = req.body;
        try {
            const newRestaurantAddress = await restaurantAddressService.createAddress(restaurantAddress);
            return res.status(201).json(newRestaurantAddress);
        } catch (error) {
            console.error(error);
            return res.status(error.statusCode || 500).json({ message: error.message });
        }
    },

    async findById(req, res) {
        const id = req.params.id;
        try {
            const restaurantAddress = await restaurantAddressService.findById(id);
            if (!restaurantAddress) {
                return res.status(404).json({ error: 'Restaurant address not found' });
            }
            return res.status(200).json(restaurantAddress);
        } catch (error) {
            console.error(error);
            return res.status(error.statusCode || 500).json({ message: error.message });
        }
    },

    async findByRestaurantId(req, res) {
        const id = req.params.id;
        try {
            const restaurantAddresses = await restaurantAddressService.findByRestaurantId(id);
            return res.status(200).json(restaurantAddresses);
        } catch (error) {
            console.error(error);
            return res.status(error.statusCode || 500).json({ message: error.message });
        }
    },

    async update(req, res) {
        const id = req.params.id;
        const updatedRestaurantAddress = req.body;
        try {
            const restaurantAddressToUpdate = await restaurantAddressService.update(id, updatedRestaurantAddress);
            if (!restaurantAddressToUpdate) {
                return res.status(404).json({ error: 'Restaurant address not found' });
            }
            return res.status(200).json(restaurantAddressToUpdate);
        } catch (error) {
            console.error(error);
            return res.status(error.statusCode || 500).json({ message: error.message });
        }
    },

    async delete(req, res) {
        const id = req.params.id;
        try {
            const deletedRestaurantAddress = await restaurantAddressService.delete(id);
            if (!deletedRestaurantAddress) {
                return res.status(404).json({ error: 'Restaurant address not found' });
            }
            return res.status(200).json(deletedRestaurantAddress);
        } catch (error) {
            console.error(error);
            return res.status(error.statusCode || 500).json({ message: error.message });
        }
    }

};

module.exports = RestaurantAddressController;
