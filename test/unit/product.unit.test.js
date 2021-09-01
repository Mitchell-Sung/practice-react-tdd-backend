const httpMocks = require('node-mocks-http');
const createProduct = require('../../controllers/ctl.createProduct.js');
const Products = require('../../models/model.Products.js');
const newProduct = require('../../data/newProduct.json');

Products.create = jest.fn();

describe('Product Controller Create', () => {
	test('should have a createProduct function', () => {
		expect(typeof createProduct).toBe('function');
	});

	test('should call ProductModel.create', () => {
		req.body = newProduct;
		createProduct(req, res, next);
		expect(Products.create).toBeCalledWith(newProduct);
	});
});
