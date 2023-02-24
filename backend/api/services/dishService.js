const db = require('../models');

class DishService {
    static async createDish(dishToCreate) {
        try {
            const newDish = await db.Dish.create(dishToCreate)
            return newDish
        } catch (error) {
            if (dishToCreate.img_dish) {
                const imgPath = path.join(__dirname, '..', 'uploads', dishToCreate.img_dish);
                if (fs.existsSync(imgPath)) {
                    fs.unlinkSync(imgPath);
                }
                throw new Error('Error creating dish')
            }
        }
    }

    static async getDishById(id) {
        try {
            const dish = await db.Dish.findByPk(id)
            if (!dish) {
                throw new Error('Dish not found')
            }
            return dish
        } catch (error) {
            throw new Error('Error getting dish by ID')
        }
    }

    static async updateDish(id, updatedFields) {
        try {
            const [updatedRowsCount, [updatedDish]] = await db.Dish.update(updatedFields, {
                where: {
                    id: id
                },
                returning: true
            })
            if (updatedRowsCount < 1) {
                throw new Error('Dish not found')
            }
            return updatedDish
        } catch (error) {
            throw new Error('Error updating dish')
        }
    }

    static async deleteDish(id) {
        try {
            const deletedRowsCount = await db.Dish.destroy({
                where: {
                    id: id
                }
            })
            if (deletedRowsCount < 1) {
                throw new Error('Dish not found')
            }
            return deletedRowsCount
        } catch (error) {
            throw new Error('Error deleting dish')
        }
    }

    static async getAllDishes() {
        try {
            const dishes = await db.Dish.findAll()
            return dishes
        } catch (error) {
            throw new Error('Error getting all dishes')
        }
    }
}

module.exports = DishService
