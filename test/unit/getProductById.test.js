import httpMocks from 'node-mocks-http';
import getProductById from '../../controllers/ctl.getProductById.js';
import Products from '../../models/model.Products.js';

Products.findById = jest.fn();

const productId = '6131b0cd3e84d3ff4567c4c2';
let req, res, next;

beforeEach(() => {
	req = httpMocks.createRequest();
	res = httpMocks.createResponse();
	next = jest.fn();
});

describe('Product Controller GetById', () => {
	test('should have a getProductById', () => {
		expect(typeof getProductById).toBe('function');
	});

	test('should call Products.findById', async () => {
		req.params.productId = productId;
		await getProductById(req, res, next);
		expect(Products.findById).toBeCalledWith(productId);
	});
});
