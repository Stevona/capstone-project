var express = require('express');
var router = express.Router();
const { Customer, Order, OrderStatusCode } = require('../orm/tracking-model');
const { body, validationResult } = require('express-validator');
const tokenValidator = require('./tokenValidator');

/* GET customers listing. */
router.get('/', async(req, res) =>{
  if (req.headers.authorization) {
    const isValidToken = await tokenValidator.checkToken(req.headers.authorization.split(' ')[1]);
    if (isValidToken) {
      try{
        let customers = await Customer.findAll();
        res.status(200).json(customers);
      } catch (error){
        console.log(error);
        res.status(500).send('Customer GET failed');
      }
    } else {
      res.status(401).send('Unauthenticated user');
    }
  } else {
    res.status(403).send('Request refused, access denied');
  }
});

router.get('/:id', async(req, res) => {
  if (req.headers.authorization) {
    const isValidToken = await tokenValidator.checkToken(req.headers.authorization.split(' ')[1]);
    if (isValidToken) {
      try{
        let customer = await Customer.findByPk(req.params.id, {
          include: [{
            model: Order, 
            include: [OrderStatusCode]
          }]
        });
        if (customer) {
          res.status(200).json(customer);
        } else {
          res.status(404).send(`Could not find customer with specified id`);
        }
      } catch(error){
        console.log(error);
        res.status(500).send('Customer GET failed');
      }
    } else {
      res.status(401).send('Unauthenticated user');
    }
  } else {
    res.status(403).send('Request refused, access denied');
  }
});

/*POST a customer listing to /api/customer*/
router.post('/',

body('firstName', 'First name must be alphabetical').isAlpha(),
body('middleName', 'Middle name must be alphabetical').isAlpha().optional({nullable: true}),
body('lastName', 'Last name must be alphabetical').isAlpha(),
body('country','Country must be alphabetical').isAlpha('en-US', {ignore: " "}),
body('address', 'Address must be alphanumeric').isAlphanumeric('en-US', {ignore: " #-.,"}),
body('city', 'City must be alphanumeric').isAlphanumeric(),
body('region', 'Region must be alphanumeric').isAlphanumeric(),
body('email', 'Must be a valid email').isEmail().normalizeEmail(),
body('zip', 'Must be a valid postal code').isPostalCode('US', 'CA', 'GB'),
body('phone', 'Must be a valid phone number').isMobilePhone('any'),

async(req,res)=>{
  if (req.headers.authorization) {
    const isValidToken = await tokenValidator.checkToken(req.headers.authorization.split(' ')[1]);
    if (isValidToken) {
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
    } else {
      res.status(401).send('Unauthenticated user');
    }
  } else {
    res.status(403).send('Request refused, access denied');
  }
});

router.put('/:id', 

body('firstName', 'First name must be alphabetical').isAlpha(),
body('middleName', 'Middle name must be alphabetical').isAlpha().optional({nullable: true}),
body('lastName', 'Last name must be alphabetical').isAlpha(),
body('country','Country must be alphabetical').isAlpha('en-US', {ignore: " "}),
body('address', 'Address must be alphanumeric').isAlphanumeric('en-US', {ignore: " #-.,"}),
body('city', 'City must be alphanumeric').isAlphanumeric(),
body('region', 'Region must be alphanumeric').isAlphanumeric(),
body('email', 'Must be a valid email').isEmail().normalizeEmail(),
body('zip', 'Must be a valid postal code').isPostalCode('US', 'CA', 'GB'),
body('phone', 'Must be a valid phone number').isMobilePhone('any'),

async(req, res) => {
  if (req.headers.authorization) {
    const isValidToken = await tokenValidator.checkToken(req.headers.authorization.split(' ')[1]);
    if (isValidToken) {
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
    } else {
      res.status(401).send('Unauthenticated user');
    }
  } else {
    res.status(403).send('Request refused, access denied');
  }
});

router.delete('/:id', async(req, res) => {
  if (req.headers.authorization) {
    const isValidToken = await tokenValidator.checkToken(req.headers.authorization.split(' ')[1]);
    if (isValidToken) {
      try{
        await Customer.destroy({
          where: { customerId: req.params['id'] }
        });
        res.status(200).send(`Customer successfully deleted`);
      } catch(error){
        console.log(error);
        res.status(500).send(error);
      }
    } else {
      res.status(401).send('Unauthenticated user');
    }
  } else {
    res.status(403).send('Request refused, access denied');
  }
});

module.exports = router;
