var express = require('express');
var router = express.Router();
const { Customer } = require('../orm/tracking-model');

/* GET customers listing. */
router.get('/', async(req, res) =>{
  try{
    let customers = await Customer.findAll();
    res.json(customers);
  } catch (error){
    res.status(500).send('Customer fetching failed');
  }
});

module.exports = router;
