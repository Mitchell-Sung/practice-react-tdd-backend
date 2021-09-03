import Products from '../models/model.Products.js';

const getProducts = async (req, res, next) => {
	try {
		await Products.find({});
	} catch (error) {
		console.error(error);
	}
};

export default getProducts;
