import Products from '../models/model.Products.js';

const createProduct = (req, res, next) => {
	Products.create(req.body);
};

export default createProduct;
