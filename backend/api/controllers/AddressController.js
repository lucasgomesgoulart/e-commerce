const addressService = require('../services/addressService')

class AddressController {

    static async create(req, res) {
        const address = req.body
        try {
            const addressToCreate = await addressService.create(address)
            return res.status(200).json({ addressToCreate });
        } catch (error) {
            return res.status(500).json({ error: error })
        }
    }

    static async findById(req, res) {
        const user_id = req.admin
        try {
            const address = await addressService.findById(user_id)
            return res.status(200).json({ address });
        } catch (error) {
            return res.status(500).json({ error: error })
        }
    }

    static async update(req, res) {
        const { id } = req.params
        const addressToUpdate = req.body
        try {
            const newAddress = await addressService.update({ id, addressToUpdate })
            return res.status(200).json({ newAddress })
        } catch (error) {
            return res.status(error.statusCode).json({ error: error })
        }
    }

    static async delete(req, res) {
        const { id } = req.params
        try {
            const deletedAddress = await addressService.delete(id)
            return res.status(200).json({ message: 'Address deleted successfully', deletedAddress })
        } catch (error) {
            return res.status(error.statusCode).json({ error: error })
        }
    }
}

module.exports = AddressController;