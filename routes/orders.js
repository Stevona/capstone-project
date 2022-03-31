var express = require('express');
var router = express.Router();
const { Order, Customer, Product, OrderStatusCode } = require('../orm/tracking-model');
const tokenValidator = require('./tokenValidator');

/* GET Order listing. */
router.get('/', async(req, res) =>{
  if (req.headers.authorization) {
    const isValidToken = await tokenValidator.checkToken(req.headers.authorization.split(' ')[1]);
    if (isValidToken) {
      try{
        let orders = await Order.findAll({
          include: [ Customer, OrderStatusCode ]
        });
        res.status(200).json(orders);
      } catch (error){
        console.log(error);
        res.status(500).send('Order GET failed');
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
        let order = await Order.findByPk(req.params.id, {
          include: [ Customer, Product, OrderStatusCode ]
        });
        if (order) {
          res.status(200).json(order);
        } else {
          res.status(404).send(`Could not find order with specified id`);
        }
      } catch(error){
        console.log(error);
        res.status(500).send('Order GET failed');
      }
    } else {
      res.status(401).send('Unauthenticated user');
    }
  } else {
    res.status(403).send('Request refused, access denied');
  }
});

/*POST a order listing to /api/order*/
router.post('/', async(req,res)=>{
  if (req.headers.authorization) {
    const isValidToken = await tokenValidator.checkToken(req.headers.authorization.split(' ')[1]);
    if (isValidToken) {
      let protoOrder = req.body;
      try{
        let model = await Order.create(protoOrder);
        res.status(201).json(model);
      } catch (error){
        console.log(error);
        res.status(500).send('Order POST failed');
      }
    } else {
      res.status(401).send('Unauthenticated user');
    }
  } else {
    res.status(403).send('Request refused, access denied');
  }
});

router.put('/:id', async(req, res) => {
  if (req.headers.authorization) {
    const isValidToken = await tokenValidator.checkToken(req.headers.authorization.split(' ')[1]);
    if (isValidToken) {
      let protoOrder = req.body;
      try{
        let orders = await Order.findByPk(req.params.id);
        if (orders){
          let updates = await Order.update(protoOrder, {
            where: { orderId: req.params['id'] }
          });
          if (updates) {
            let orderUpdate = await Order.findByPk(req.params.id);
            res.status(200).json(orderUpdate);
          } else {
            res.status(404).send(`Not found: could not update order with specified id`);
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
        await Order.destroy({
          where: { orderId: req.params['id'] }
        });
        res.status(200).send(`Order successfully deleted`);
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
