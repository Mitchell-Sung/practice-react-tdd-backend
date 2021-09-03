import Products from '../models/model.Products.js';

const getProducts = async (req, res, next) => {
	try {
		const foundProducts = await Products.find({});
		res.status(200).json(foundProducts);
	} catch (error) {
		console.error(error);
	}
};

export default getProducts;
