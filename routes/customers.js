var express = require('express');
var router = express.Router();
const { Customer } = require('../orm/tracking-model');

/* GET customers listing. */
router.get('/', async(req, res) =>{
  try{
    let customers = await Customer.findAll();
    res.json(customers);
  } catch (error){
    console.log(error);
    res.status(404).send(error);
  }
});

router.get('/:id', async(req, res) => {
  try{
    let customer = await Customer.findOne({
      where: { customerId: req.params['id'] }
    });
    res.json(customer);
  } catch(error) {
    console.log(error);
    res.status(404).send(error);
  }
});

module.exports = router;
