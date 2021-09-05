import Products from '../models/model.Products.js';

const deleteProduct = async (req, res, next) => {
	await Products.findByIdAndDelete(req.params.productId);
};

export default deleteProduct;
