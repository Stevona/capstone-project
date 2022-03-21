var express = require('express');
var router = express.Router();
const { Customers } = require('../orm/tracking-model')

/* GET customers listing. */
router.get('/api/customers', async(req, res) =>{
  try{
    let customers = await Customers.findAll();
    res.json(customers);
  } catch (error){
    res.status(500).send('Customer fetching failed');
  }
});

module.exports = router;
