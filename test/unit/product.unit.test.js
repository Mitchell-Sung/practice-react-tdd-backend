import httpMocks from 'node-mocks-http';
import createProduct from '../../controllers/ctl.createProduct.js';
import Products from '../../models/model.Products.js';
import newProduct from '../../data/newProduct.json';

Products.create = jest.fn();

let req, res, next;

beforeEach(() => {
	req = httpMocks.createRequest();
	res = httpMocks.createResponse();
	next = null;
});

describe('Product Controller Create', () => {
	beforeEach(() => {
		req.body = newProduct;
	});

	test('should have a createProduct function', () => {
		expect(typeof createProduct).toBe('function');
	});

	test('should call ProductModel.create', () => {
		createProduct(req, res, next);
		expect(Products.create).toBeCalledWith(newProduct);
	});
});
