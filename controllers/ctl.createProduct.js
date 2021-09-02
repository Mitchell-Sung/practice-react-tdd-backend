import Products from '../models/model.Products.js';

const createProduct = async (req, res, next) => {
	const createdProduct = await Products.create(req.body);
	console.log('## createdProduct :>> ', createdProduct);
	res.status(201).json(createdProduct);
};

export default createProduct;
