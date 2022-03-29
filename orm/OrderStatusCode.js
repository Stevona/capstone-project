const { DataTypes } = require('sequelize');
const connection = require('./db-connection');

const OrderStatusCode = connection.define('OrderStatusCode', {
    orderStatusCodeId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    orderStatusCode: { type: DataTypes.STRING, allowNull: false }
});

module.exports = OrderStatusCode;