import httpMocks from 'node-mocks-http';
import createProduct from '../../controllers/ctl.createProduct.js';
import Products from '../../models/model.Products.js';
import newProduct from '../../data/newProduct.json';

Products.create = jest.fn();

let req, res, next;

beforeEach(() => {
	req = httpMocks.createRequest();
	res = httpMocks.createResponse();
	next = jest.fn();
});

describe('Product Controller Create', () => {
	beforeEach(() => {
		req.body = newProduct;
	});

	test('should have a createProduct function', () => {
		expect(typeof createProduct).toBe('function');
	});

	test('should call ProductModel.create', async () => {
		await createProduct(req, res, next);
		expect(Products.create).toBeCalledWith(newProduct);
	});

	test('should return 201 response code', async () => {
		await createProduct(req, res, next);
		expect(res.statusCode).toBe(201);
		expect(res._isEndCalled()).toBeTruthy();
	});

	// Response results back
	test('should return json body in response', async () => {
		// "Products.create" is created by using Mock function.
		Products.create.mockReturnValue(newProduct);
		await createProduct(req, res, next);
		expect(res._getJSONData()).toStrictEqual(newProduct);
	});

	test('should handle errors', async () => {
		// This part is the area handled by the MongoDB.
		const errorMessage = { message: 'description property missing' };
		const rejectedPromise = Promise.reject(errorMessage);
		Products.create.mockReturnValue(rejectedPromise);
		await createProduct(req, res, next);
		expect(next).toBeCalledWith(errorMessage);
	});
});

// async / await 사용한 비동기적 부분을 명확하게 이해할 것.

//"description": "It's good!",
