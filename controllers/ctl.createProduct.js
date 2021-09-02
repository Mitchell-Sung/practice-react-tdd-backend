import Products from '../models/model.Products.js';

const createProduct = async (req, res, next) => {
	try {
		const createdProduct = await Products.create(req.body);
		res.status(201).json(createdProduct);
	} catch (error) {
		next(error);
	}
};

export default createProduct;
