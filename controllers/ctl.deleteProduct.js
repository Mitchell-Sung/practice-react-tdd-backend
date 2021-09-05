import Products from '../models/model.Products.js';

const deleteProduct = async (req, res, next) => {
	try {
		const deletedProduct = await Products.findByIdAndDelete(
			req.params.productId
		);
		if (deletedProduct) {
			res.status(200).json(deletedProduct);
		} else {
			res.status(404).send();
		}
	} catch (error) {
		next(error);
	}
};

export default deleteProduct;
