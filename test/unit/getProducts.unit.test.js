import httpMocks from 'node-mocks-http';
import Products from '../../models/model.Products.js';
import getProducts from '../../controllers/ctl.getProducts.js';
import findProductData from '../../data/findProduct.json';

Products.find = jest.fn();

let req, res, next;

beforeEach(() => {
	req = httpMocks.createRequest();
	res = httpMocks.createResponse();
	next = jest.fn();
});

describe('Product Controller Get', () => {
	test('should have a getProducts function', () => {
		expect(typeof getProducts).toBe('function');
	});

	test('should call Products.find()', async () => {
		await getProducts(req, res, next);
		expect(Products.find).toHaveBeenCalledWith({});
	});

	test('should return 200 response', async () => {
		await getProducts(req, res, next);
		expect(res.statusCode).toBe(200);
		expect(res._isEndCalled).toBeTruthy();
	});

	test('should return json body in response', async () => {
		Products.find.mockReturnValue(findProductData);
		await getProducts(req, res, next);
		expect(res._getJSONData()).toStrictEqual(findProductData);
	});

	test('should handle errors', async () => {
		const errorMsg = { message: 'Error finding product data' };
		const rejectPromise = Promise.reject(errorMsg);
		Products.find.mockReturnValue(rejectPromise);
		await getProducts(req, res, next);
		expect(next).toHaveBeenCalledWith(errorMsg);
	});
});
