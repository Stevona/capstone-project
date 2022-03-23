var express = require('express');
var router = express.Router();
const { Customer } = require('../orm/tracking-model');

/* GET customers listing. */
router.get('/', async(req, res) =>{
  try{
    let customers = await Customer.findAll();
    res.status(200).json(customers);
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
  } catch(error){
    console.log(error);
    res.status(404).send(error);
  }
});

router.put('/:id', async(req, res) => {
  try{
    // TODO: customers PUT method
  } catch(error){
    console.log(error);
    res.status(500).send(error);
  }
});

router.delete('/:id', async(req, res) => {
  try{
    await Customer.destroy({
      where: { customerId: req.params['id'] }
    });
    res.send(`Customer ${req.params['id']} successfully deleted`);
  } catch(error){
    console.log(error);
    res.status(500).send(error);
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
