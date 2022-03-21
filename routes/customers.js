var express = require('express');
var router = express.Router();
const { Customers } = require('../orm/tracking-model')

/* GET users listing. */
router.get('/api/customers', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
