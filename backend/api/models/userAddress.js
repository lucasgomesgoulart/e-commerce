'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class UserAddress extends Model {
        static associate(models) {
            this.belongsTo(models.User, { foreignKey: 'fk_id_users', onDelete: 'CASCADE' });
            this.belongsTo(models.Address, { foreignKey: 'fk_id_address', onDelete: 'CASCADE' });
        }
    }

    UserAddress.init({
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        }
    }, {
        sequelize,
        timestamps: true,
        createdAt: 'created_at',
        updatedAt: 'updated_at',
        tableName: 'addresses',

    });

    return UserAddress;
};