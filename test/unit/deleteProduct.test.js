import httpMocks from 'node-mocks-http';
import Products from '../../models/model.Products.js';
import deleteProduct from '../../controllers/ctl.deleteProduct.js';

let req, res, next;

Products.deleteOne = jest.fn();

beforeEach(() => {
	req = httpMocks.createRequest();
	res = httpMocks.createResponse();
	next = jest.fn();
});

describe('Product Controller Delete', () => {
	test('shoud have a deleteProduct function', () => {
		expect(typeof deleteProduct).toBe('function');
	});
});
