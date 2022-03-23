var express = require('express');
var router = express.Router();
const { Customer } = require('../orm/tracking-model');

/* GET customers listing. */
router.get('/', async(req, res) =>{
  try{
    let customers = await Customer.findAll();
    res.status(200).json(customers);
  } catch (error){
    res.status(500).send('Customer fetching failed');
    console.log(error);
  }
});

/*POST a customer listing to /api/customer*/
router.post('/', async(req,res)=>{
  let protoCustomer = req.body;
  try{
    let model = await Customer.create(protoCustomer);
    res.status(201).json(model);
  } catch (error){
    res.status(500).send('Customer posting failed');
    console.log(error);
  }
});

module.exports = router;
