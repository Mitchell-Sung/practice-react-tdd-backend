const Products = require('../models/model.Products.js');

const createProduct = (req, res, next) => {
	Products.create(req.body);
};

module.exports = createProduct;
