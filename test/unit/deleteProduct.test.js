import httpMocks from 'node-mocks-http';
import Products from '../../models/model.Products.js';
import deleteProduct from '../../controllers/ctl.deleteProduct.js';

let req, res, next;
// const existingProductId = '6133042da9a9a35f4ca893e8';
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
});
