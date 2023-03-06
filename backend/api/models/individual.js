'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class Individuals extends Model {
        static associate(models) {
            this.belongsTo(models.User, { foreignKey: 'ID_USER' })
        }
    }
    Individuals.init({
        name: DataTypes.STRING,
        email: DataTypes.STRING,
        phone: DataTypes.STRING,
        cpf: DataTypes.STRING,

    }, {
        sequelize,
        modelName: 'Individuals',
        timestamps: true,
        createdAt: 'CREATED_AT',
        updatedAt: 'UPDATED_AT',
        primaryKey: 'ID_USER',
    });

    return Individuals;
};
