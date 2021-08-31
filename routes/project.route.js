const express = require('express');
const productCtl = require('.././controllers/product.ctl.js');

const router = express.Router();

router.get('/', productCtl);

module.exports = router;
