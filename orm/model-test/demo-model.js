const connection = require('../db-connection');
const { Customer } = require('../Customer');

// Immediately invoked function expression IIFE (iffy)
(async function () {
  try {
    let customers = await Customer.findAll();
    for (let cust of customers) {
      console.log(`${cust.firstName} ${cust.lastName}`);
    }
  } catch (error) {
    console.error('Something went wrong with the database:', error);
  }
  connection.close();
})();
