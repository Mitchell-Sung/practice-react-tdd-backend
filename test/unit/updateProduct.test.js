import httpMocks from 'node-mocks-http';
import Products from '../../models/model.Products.js';
import updateProduct from '../../controllers/ctl.updateProduct.js';

describe('Product Controller Update', () => {
	test('should have an updateProduct function', () => {
		expect(typeof updateProduct).toBe('function');
	});
});
