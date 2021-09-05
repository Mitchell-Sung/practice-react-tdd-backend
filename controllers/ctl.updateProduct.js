import Products from '../models/model.Products.js';

const updateProduct = async (req, res, next) => {
	try {
		const updatedProduct = await Products.findByIdAndUpdate(
			req.params.productId,
			req.body,
			{
				new: true,
			}
		);
		if (updatedProduct) {
			res.status(200).json(updatedProduct);
		} else {
			res.status(404).send();
		}
	} catch (error) {
		next(error);
	}
};

export default updateProduct;

// {new: true} = 업데이트 된 값을 리턴을 할 때 사용.
