const db = require('../models');

class AddressService {
    static async createAddress(addressToCreate) {
        try {
            const newAddress = await db.Address.create(addressToCreate)
            return newAddress
        } catch (error) {
            throw error;
        }
    }

    static async getAddressById(id) {
        try {
            const address = await db.Address.findByPk(id)
            if (!address) {
                throw new Error('Address not found')
            }
            return address
        } catch (error) {
            throw new Error('Error getting address by ID')
        }
    }

    static async updateAddress(id, updatedFields) {
        try {
            const [updatedRowsCount, [updatedAddress]] = await db.Address.update(updatedFields, {
                where: {
                    id: id
                },
                returning: true
            })
            if (updatedRowsCount < 1) {
                throw new Error('Address not found')
            }
            return updatedAddress
        } catch (error) {
            throw new Error('Error updating Address')
        }
    }

    static async deleteAddress(id) {
        try {
            const deletedRowsCount = await db.Address.destroy({
                where: {
                    id: id
                }
            })
            if (deletedRowsCount < 1) {
                throw new Error('Address not found')
            }
            return deletedRowsCount
        } catch (error) {
            throw new Error('Error deleting address')
        }
    }

    static async getAllAddress(id) {

        try {
            const AllAddress = await db.Address.findAll({ where: { id } })
            return AllAddress
        } catch (error) {
            throw new Error('Error getting all addresses')
        }
    }
}

module.exports = AddressService
