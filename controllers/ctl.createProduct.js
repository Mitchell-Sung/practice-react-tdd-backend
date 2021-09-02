import Products from '../models/model.Products.js';

const createProduct = (req, res, next) => {
	const createdProduct = Products.create(req.body);
	res.status(201).json(createdProduct);
};

export default createProduct;
