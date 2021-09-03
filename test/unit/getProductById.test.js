import getProductById from '../../controllers/ctl.getProductById.js';

describe('Product Controller GetById', () => {
	test('should have a getProductById', () => {
		expect(typeof getProductById).toBe('function');
	});
});
