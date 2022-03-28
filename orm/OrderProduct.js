const { DataTypes } = require('sequelize');
const connection = require('./db-connection');
const Order = require('./Order');
const Product = require('./Product');

const OrderProduct = connection.define('OrderProduct', {
    orderProductId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    quantity: { type: DataTypes.INTEGER, allowNull: false },
    priceEach: { type: DataTypes.DECIMAL, allowNull: false },
    orderId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Order,
            key: 'orderId'
        }
    },
    productId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Product,
            key: 'productId'
        }
    }
});

module.exports = OrderProduct;