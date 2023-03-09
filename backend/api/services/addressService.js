const db = require('../models')

class AddressService {
    static async create(address) {
        try {
            const createdAddress = await db.Address.create({...address, id_user: address.id_user})
            return createdAddress
        } catch (error) {
            throw error
        }
    }

    static async update({ id, addressToUpdate }) {
        if (!id || !addressToUpdate) return { message: 'Address not found' }
        try {
            const updatedRows = await db.Address.update(addressToUpdate, { where: { id } })
            if (updatedRows[0] === 0) throw { statusCode: 404, message: 'Address not found' }
            const updatedAddress = await db.Address.findByPk(id)
            return updatedAddress
        } catch (error) {
            throw error
        }
    }

    static async delete(id) {
        if (!id) return { message: 'Address not found' }
        try {
            const deletedRows = await db.Address.destroy({ where: { id } })
            if (deletedRows === 0) throw { statusCode: 404, message: 'Address not found' }
            return { message: 'Address deleted successfully' }
        } catch (error) {
            throw error
        }
    }
}

module.exports = AddressService
