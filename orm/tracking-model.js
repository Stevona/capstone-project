const Customer = require('./Customer');
const Product = require('./Product');
const connection = require('./db-connection');
/*

relationships here-> belongsToMany(), hasMany(), belongsTo()

*/

connection
    .authenticate()
    .then(() => {
        console.log("Connection to database established successfully");
    })
    .catch(error => {
        console.error("Unable to connect to the database: ", error);
    });

module.exports = { Customer, Product };