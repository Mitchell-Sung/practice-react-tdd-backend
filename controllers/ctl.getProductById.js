import Products from '../models/model.Products.js';

const getProductById = async (req, res, next) => {
	try {
		const product = await Products.findById(req.params.productId);
		if (product) {
			res.status(200).json(product);
		} else {
			res.status(404).send();
		}
	} catch (error) {
		next(error);
	}
};

export default getProductById;
