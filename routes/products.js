var express = require('express');
var router = express.Router();
const { Product } = require('../orm/tracking-model');
const { body, validationResult } = require('express-validator');

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
    let product = await Product.findByPk(req.params.id);
    if (product) {
      res.status(200).json(product);
    } else {
      res.status(404).send(`Could not find product with specified id`);
    }
    res.json(product);
  } catch(error){
    console.log(error);
    res.status(404).send(error);
  }
});

/* PUT to modify a single product given productId */

router.put('/:id', 
body('productSKU', 'Product SKU must be alphanumeric').isAlphanumeric(),
body('productPrice', 'Price format is invalid').isCurrency({
  allow_negatives: false, 
  thousands_separator: ''
}),
body('productName', 'Product name must be alphanumeric').isAlphanumeric('en-US', {ignore: " "}),
body('productQuantity', 'Product quantity must be numeric').isNumeric(),
async(req, res) => {
  let protoProduct = req.body;
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  try{
    let product = await Product.findByPk(req.params.id);
    if (product) {
      let updates = await Product.update(protoProduct, {
        where: { productId: req.params['id'] }
      });
      if (updates) {
        let productUpdate = await Product.findByPk(req.params.id);
        res.status(200).json(productUpdate);
      }
     } else {
      res.status(404).send(`Not found: could not update product with specified id`);
    }
  } catch(error){
    console.log(error);
    res.status(500).send(error);
  }
});


module.exports = router;