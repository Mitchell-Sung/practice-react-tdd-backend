import Products from '../models/model.Products.js';

const getProductById = async (req, res, next) => {
	try {
		const product = await Products.findById(req.params.productId);
		res.status(200).json(product);
	} catch (error) {
		next(error);
	}
};

export default getProductById;
