'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class Company extends Model {
        static associate(models) {
            this.belongsTo(models.User, { foreignKey: 'ID_USER' });

        }
    }
    Company.init({
        business_name: DataTypes.STRING,
        cnpj: DataTypes.STRING,
        trade_name: DataTypes.STRING,
    }, {
        sequelize,
        modelName: 'Company',
        underscored: true
    });

    return Company;
};
