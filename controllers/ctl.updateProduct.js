import Products from '../models/model.Products.js';

const updateProduct = async (req, res, next) => {
	try {
		await Products.findByIdAndUpdate(req.params.productId, req.body, {
			new: true,
		});
	} catch (error) {
		next(error);
	}
};

export default updateProduct;

// {new: true} = 업데이트 된 값을 리턴을 할 때 사용.
