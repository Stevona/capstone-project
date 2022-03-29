const connection = require('./db-connection');
const Customer = require('./Customer');
const Product = require('./Product');
const Order = require('./Order');
const OrderStatusCode = require('./OrderStatusCode');
const OrderProduct = require('./OrderProduct');

/* Order.belongsTo(Customer, {
    foreignKey: 'customerId'
});

// TODO: Check relationship
Customer.hasMany(Order, {
    foreignKey: 'customerId'
});

Product.belongsToMany(Order, {
    through: { model: OrderProduct },
    foreignKey: 'productId'
});

Order.belongsToMany(Product, {
    through: { model: OrderProduct },
    foreignKey: 'orderId'
});

Order.hasOne(OrderStatusCode, {
    foreignKey: 'orderStatusCodeId'
});

OrderStatusCode.belongsToMany(Order, {
    foreignKey: 'orderStatusCodeId'
}); */


connection
    .authenticate()
    .then(() => {
        console.log("Connection to database established successfully");
    })
    .catch(error => {
        console.error("Unable to connect to the database: ", error);
    });

module.exports = { Customer, Product };