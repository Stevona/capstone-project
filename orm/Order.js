const { DataTypes } = require('sequelize');
const connection = require('./db-connection');
const Customer = require('./Customer');
const OrderStatusCode = require('./OrderStatusCode');

const Order = connection.define('Order', {
    orderId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    datetimeOrderPlaced: { type: DataTypes.DATEONLY, allowNull: false },
    datetimeOrderFulfilled: { type: DataTypes.DATEONLY },
    totalOrderPrice: { type: DataTypes.DECIMAL, allowNull: false },
    orderNotes: { type: DataTypes.STRING },
    customerId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Customer,
            key: 'customerId'
        }
    },
    orderStatusCodeId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: OrderStatusCode,
            key: 'orderStatusCodeId'
        }
    }
});


module.exports = Order;