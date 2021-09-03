import Products from '../models/model.Products.js';

const getProductById = async (req, res, next) => {
	try {
		await Products.findById(req.params.productId);
	} catch (error) {
		next(error);
	}
};

export default getProductById;
