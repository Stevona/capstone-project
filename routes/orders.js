var express = require('express');
var router = express.Router();
const { Order } = require('../orm/tracking-model');

/* GET Order listing. */
router.get('/', async(req, res) =>{
  try{
    let orders = await Order.findAll();
    res.status(200).json(orders);
  } catch (error){
    console.log(error);
    res.status(500).send('Order GET failed');
  }
});

router.get('/:id', async(req, res) => {
  try{
    let orders = await Order.findByPk(req.params.id);
    if (orders) {
      res.status(200).json(orders);
    } else {
      res.status(404).send(`Could not find order with specified id`);
    }
  } catch(error){
    console.log(error);
    res.status(500).send('Order GET failed');
  }
});

/*POST a order listing to /api/order*/
router.post('/', async(req,res)=>{
  let protoOrder = req.body;
  try{
    let model = await Order.create(protoOrder);
    res.status(201).json(model);
  } catch (error){
    console.log(error);
    res.status(500).send('Order POST failed');
  }
});


router.put('/:id', async(req, res) => {
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
});

router.delete('/:id', async(req, res) => {
  try{
    await Order.destroy({
      where: { orderId: req.params['id'] }
    });
    res.status(200).send(`Order successfully deleted`);
  } catch(error){
    console.log(error);
    res.status(500).send(error);
  }
});

module.exports = router;
