const express = require('express');
const createProduct = require('../controllers/ctl.createProduct.js');

const router = express.Router();

router.get('/', createProduct);

module.exports = router;
