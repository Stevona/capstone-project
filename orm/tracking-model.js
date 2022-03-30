const connection = require('./db-connection');
const Customer = require('./Customer');
const Product = require('./Product');
const Order = require('./Order');
const OrderStatusCode = require('./OrderStatusCode');
const OrderProduct = require('./OrderProduct');

Product.belongsToMany(Order, {through:OrderProduct});
OrderProduct.hasMany(Product, {foreignKey: 'productId'});
Order.belongsToMany(Product,{through: OrderProduct});
OrderProduct.hasMany(Order, {foreignKey: 'orderId'});
Order.belongsTo(Customer, {foreignKey:'customerId'});
Customer.hasMany(Order, {foreignKey: 'customerId'});
OrderStatusCode.belongsTo(Order,{foreignKey: 'orderStatusCodeId'});
Order.hasOne(OrderStatusCode, {foreignKey: 'orderStatusCodeId'});


connection
    .authenticate()
    .then(() => {
        console.log("Connection to database established successfully");
    })
    .catch(error => {
        console.error("Unable to connect to the database: ", error);
    });

module.exports = { Customer, Product, Order};