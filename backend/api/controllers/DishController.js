const dishService = require('../services/dishService')

class DishController {

    static async createDish(req, res) {
        const dishToCreate = req.body
        try {
            const img_dish = req.file ? req.file.filename : null;
            const newDish = await dishService.createDish({...dishToCreate, img_dish})
            return res.status(200).json(newDish)
        } catch (error) {
            return res.status(error.statusCode || 500).json({ message: error.message })

        }
    }

    static async deleteDish(req, res) {
        const { id } = req.params
        try {
            await dishService.deleteDish(id)
            return res.status(200).json({ message })
        } catch (error) {
            return res.status(error.statusCode || 500).json({ message: error.message })
        }
    }

    static async updateDish(req, res) {
        const { id } = req.params
        const dishToUpdate = req.body
        try {
            const updatedDish = await dishService.updateDish(id, dishToUpdate)
            return res.status(200).json(updatedDish)
        } catch (error) {
            return res.status(error.statusCode || 500).json({ message: error.message })
        }
    }
}

module.exports = DishController;