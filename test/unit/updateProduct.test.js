import httpMocks from 'node-mocks-http';
import Products from '../../models/model.Products.js';
import updateProduct from '../../controllers/ctl.updateProduct.js';

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
		console.log('req.params.productId :>> ', req.params.productId);
		await updateProduct(req, res, next);
		expect(Products.findByIdAndUpdate).toHaveBeenCalledWith(
			productId,
			{ name: 'MacBook Pro 16', description: 'Updated MacBook Pro 16' },
			{ new: true }
		);
	});
});

// {new: true} = 업데이트 된 값을 리턴을 할 때 사용.
