const AddressService = require('../services/addressService')


class AddressController {

    static async createAddress(req, res) {
        const addressToCreate = req.body
        try {
            const newAddress = await AddressService.createAddress(addressToCreate)
            return res.status(201).json({
                message: 'Address created sucessfully',
                data: newAddress
            })
        } catch (error) {
            // console.log(addressToCreate)
            console.log(error)
            return res.status(error.statusCode || 500).json({ message: error.message })

        }
    }

    static async updateAddress(req, res) {
        const { id } = req.params
        const addressToUpdate = req.body
        try {
            const updatedAddress = await AddressService.updateAddress(addressToUpdate, id)
            return res.status(201).json({
                message: 'Address updated sucessfully',
                data: updatedAddress
            })
        } catch (error) {
            return res.status(error.statusCode || 500).json({ message: error.message })

        }
    }

    static async deleteAddress(req, res) {
        const { id } = req.params
        try {
            const addresToDelete = await AddressService.deleteAddress(id)
            return res.status(200).json({
                message: 'Address deleted succesfully'
            })
        } catch (error) {
            return res.status(error.statusCode || 500).json({ message: error.message })

        }
    }

    static async getAllAddress(req, res) {
        try {
            const AllAddress = await AddressService.getAllAddress(req.admin)
            return res.status(200).json({
                message: 'Success! All addresses',
                data: AllAddress
            })
        } catch (error) {
            return res.status(error.statusCode || 500).json({ message: error.message })
        }
    }
}

module.exports = AddressController
