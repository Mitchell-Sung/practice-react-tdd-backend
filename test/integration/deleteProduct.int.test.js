import request from 'supertest';
import app from '../../server.js';

// Variables for testing:
const existingProductId = '6133042da9a9a35f4ca893e8';
const nonExistingProductId = '6131bb593995565d2662c811';

test('DELETE /api/products', async () => {
	const res = await request(app)
		.delete(`/api/products/${existingProductId}`)
		.send();
	expect(res.statusCode).toBe(200);
});

test('DELETE id does not exist /api/products/:productId', async () => {
	const res = await request(app)
		.delete(`/api/products/${nonExistingProductId}`)
		.send();
	expect(res.statusCode).toBe(404);
});
