import httpMocks from 'node-mocks-http';
import Products from '../../models/model.Products.js';
import updateProduct from '../../controllers/ctl.updateProduct.js';
import newProduct from '../../data/newProduct.json';

const productId = '6131bb593995565d2662c889';
let req, res, next;

Products.findByIdAndUpdate = jest.fn();

beforeEach(() => {
	req = httpMocks.createRequest();
	res = httpMocks.createResponse();
	next = jest.fn();
});

describe('Product Controller Update', () => {
	test('should have an updateProduct function', () => {
		expect(typeof updateProduct).toBe('function');
	});

	test('should call Products.findByIdAndUpdate', async () => {
		req.params.productId = productId;
		req.body = {
			name: 'MacBook Pro 16',
			description: 'Updated MacBook Pro 16',
		};
		await updateProduct(req, res, next);
		expect(Products.findByIdAndUpdate).toHaveBeenCalledWith(
			productId,
			{ name: 'MacBook Pro 16', description: 'Updated MacBook Pro 16' },
			{ new: true }
		);
	});

	test('should return json body and response code 200', async () => {
		req.params.productId = productId;
		req.body = newProduct;
		Products.findByIdAndUpdate.mockReturnValue(newProduct);
		await updateProduct(req, res, next);
		expect(res._isEndCalled()).toBeTruthy();
		expect(res.statusCode).toBe(200);
		expect(res._getJSONData()).toStrictEqual(newProduct);
	});
});

// {new: true} = 업데이트 된 값을 리턴을 할 때 사용.
