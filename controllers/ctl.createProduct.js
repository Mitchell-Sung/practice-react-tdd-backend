import Products from '../models/model.Products.js';

const createProduct = (req, res, next) => {
	Products.create(req.body);
	res.status(201).send();
};

export default createProduct;
