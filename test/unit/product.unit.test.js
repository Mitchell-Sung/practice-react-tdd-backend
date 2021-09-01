import httpMocks from 'node-mocks-http';
import createProduct from '../../controllers/ctl.createProduct.js';
import Products from '../../models/model.Products.js';
import newProduct from '../../data/newProduct.json';

// const httpMocks = require('node-mocks-http');
// const createProduct = require('../../controllers/ctl.createProduct.js');
// const Products = require('../../models/model.Products.js');
// const newProduct = require('../../data/newProduct.json');

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

	test('should return 201 response code', () => {
		createProduct(req, res, next);
		expect(res.statusCode).toBe(201);
		expect(res._isEndCalled()).toBeTruthy();
	});
});
