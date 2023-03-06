'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class Individuals extends Model {
        static associate(models) {
            this.belongsTo(models.User, { foreignKey: 'id_user' })
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
        primaryKey: 'id_user',
    });

    return Individuals;
};
