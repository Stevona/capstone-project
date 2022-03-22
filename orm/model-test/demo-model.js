const connection = require('../db-connection');
const { Customers } = require('../Customers');

// Immediately invoked function expression IIFE (iffy)
(async function () {
  try {
    let customers = await Customers.findAll();
    for (let customer of customers) {
      console.log(`${customer.firstName} ${customer.lastName}`);
    }
  } catch (error) {
    console.error('Something went wrong with the database:', error);
  }
  connection.close();
})();
