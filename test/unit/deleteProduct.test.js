import httpMocks from 'node-mocks-http';
import Products from '../../models/model.Products.js';
import deleteProduct from '../../controllers/ctl.deleteProduct.js';

// Delete product data:
const deleteProductData = {
	name: 'Deleted Product',
	description: 'It has been deleted',
};

let req, res, next;
const existingProductId = '6133042da9a9a35f4ca893e8';
const nonExistingProductId = '6133042da9a9a35f4ca893c1';

Products.findByIdAndDelete = jest.fn();

beforeEach(() => {
	req = httpMocks.createRequest();
	res = httpMocks.createResponse();
	next = jest.fn();
});

describe('Product Controller Delete', () => {
	test('shoud have a deleteProduct function', () => {
		expect(typeof deleteProduct).toBe('function');
	});

	test('should call Products.findByIdAndDelete', async () => {
		req.params.productId = nonExistingProductId;
		await deleteProduct(req, res, next);
		expect(Products.findByIdAndDelete).toBeCalledWith(nonExistingProductId);
	});

	test('should return 200 response', async () => {
		Products.findByIdAndDelete.mockReturnValue(deleteProductData);
		await deleteProduct(req, res, next);
		expect(res.statusCode).toBe(200);
		expect(res._getJSONData()).toStrictEqual(deleteProductData);
		expect(res._isEndCalled()).toBeTruthy();
	});

	test('should handle 404 when item does not exist', async () => {
		Products.findByIdAndDelete.mockReturnValue(null);
		await deleteProduct(req, res, next);
		expect(res.statusCode).toBe(404);
		expect(res._isEndCalled()).toBeTruthy();
	});

	test('should handle errors', async () => {
		const errMsg = { message: 'Error deleting' };
		const rejectedPromise = Promise.reject(errMsg);
		Products.findByIdAndDelete.mockReturnValue(rejectedPromise);
		await deleteProduct(req, res, next);
		expect(next).toHaveBeenCalledWith(errMsg);
	});
});
