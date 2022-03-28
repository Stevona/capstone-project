var express = require('express');
var router = express.Router();
const { Customer } = require('../orm/tracking-model');
const { body, validationResult } = require('express-validator');


/* GET customers listing. */
router.get('/', async(req, res) =>{
  try{
    let customers = await Customer.findAll();
    res.status(200).json(customers);
  } catch (error){
    console.log(error);
    res.status(500).send('Customer GET failed');
  }
});

router.get('/:id', async(req, res) => {
  try{
    let customer = await Customer.findByPk(req.params.id);
    if (customer) {
      res.status(200).json(customer);
    } else {
      res.status(404).send(`Could not find customer with specified id`);
    }
  } catch(error){
    console.log(error);
    res.status(500).send('Customer GET failed');
  }
});

/*POST a customer listing to /api/customer*/
router.post('/',

body('firstName', 'First name must be alphabetical').isAlpha(),
body('middleName', 'Middle name must be alphabetical').isAlpha(),
body('lastName', 'Last name must be alphabetical').isAlpha(),
body('country','Country must be alphabetical').isAlpha(),
body('address', 'Address must be alphanumeric').isAlphanumeric('en-US', {ignore: " "}),
body('city', 'City must be alphanumeric').isAlphanumeric(),
body('region', 'Region must be alphanumeric').isAlphanumeric(),
body('email', 'Must be a valid email').isEmail().normalizeEmail(),
body('zip', 'Must be a valid postal code').isPostalCode('US', 'CA', 'GB'),
body('phone', 'Must be a valid phone number').isMobilePhone('any'),


async(req,res)=>{
  let protoCustomer = req.body;
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  try{
    let model = await Customer.create(protoCustomer);
    res.status(201).json(model);
  } catch (error){
    console.log(error);
    res.status(500).send('Customer POST failed');
  }
});


router.put('/:id', 

body('firstName', 'First name must be alphabetical').isAlpha(),
body('middleName', 'Middle name must be alphabetical').isAlpha(),
body('lastName', 'Last name must be alphabetical').isAlpha(),
body('country','Country must be alphabetical').isAlpha(),
body('address', 'Address must be alphanumeric').isAlphanumeric('en-US', {ignore: " "}),
body('city', 'City must be alphanumeric').isAlphanumeric(),
body('region', 'Region must be alphanumeric').isAlphanumeric(),
body('email', 'Must be a valid email').isEmail().normalizeEmail(),
body('zip', 'Must be a valid postal code').isPostalCode('US', 'CA', 'GB'),
body('phone', 'Must be a valid phone number').isMobilePhone('any'),

async(req, res) => {
  let protoCustomer = req.body;
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  try{
    let customer = await Customer.findByPk(req.params.id);
    if (customer){
    let updates = await Customer.update(protoCustomer, {
      where: { customerId: req.params['id'] }
    });
    if (updates) {
      let customerUpdate = await Customer.findByPk(req.params.id);
      res.status(200).json(customerUpdate);
    } else {
      res.status(404).send(`Not found: could not update customer with specified id`);
    }
  } 
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
    res.status(200).send(`Customer successfully deleted`);
  } catch(error){
    console.log(error);
    res.status(500).send(error);
  }
});

module.exports = router;
