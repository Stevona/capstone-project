var express = require('express');
var router = express.Router();
const { Product } = require('../orm/tracking-model');

/* GET all products */
router.get('/', async(req, res) =>{
  try{
    let products = await Product.findAll();
    res.status(200).json(products);
  } catch (error){
    console.log(error);
    res.status(404).send(error);
  }
});

/* GET product of specific productId*/
router.get('/:id', async(req, res) => {
  try{
    let products = await Product.findOne({
      where: { productId: req.params['id'] }
    });
    res.json(products);
  } catch(error){
    console.log(error);
    res.status(404).send(error);
  }
});

/* PUT to modify a single product given productId */
router.put('/:id', async(req, res) => {
  try{
    let protoProd = req.body;
    const [products,conn] = await Product.upsert(protoProd,
      { where: {productId: req.params['id']}
    });
    if(conn){
      res.status(201).json(products);
    }else{
      res.status(200).send('Customer record updated');
    }
  } catch(error){
    console.log(error);
    res.status(500).send(error);
  }
});


module.exports = router;