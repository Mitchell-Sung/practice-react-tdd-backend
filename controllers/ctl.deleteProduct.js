import Products from '../models/model.Products.js';

const deleteProduct = async (req, res, next) => {
	const deletedProduct = await Products.findByIdAndDelete(req.params.productId);
	res.status(200).json(deletedProduct);
};

export default deleteProduct;
