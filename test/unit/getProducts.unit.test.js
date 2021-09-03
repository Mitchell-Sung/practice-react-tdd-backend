import httpMocks from 'node-mocks-http';
import Products from '../../models/model.Products.js';
import getProducts from '../../controllers/ctl.getProducts.js';

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
});
