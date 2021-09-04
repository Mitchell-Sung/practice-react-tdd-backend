import request from 'supertest';
import app from '../../server.js';
import findProductByIdData from '../../data/findProductById.json';

test('GET /api/products/:productId', async () => {
	const response = await request(app).get(
		`/api/products/${findProductByIdData._id}`
	);
	expect(response.statusCode).toBe(200);
	expect(response.body.name).toBe(findProductByIdData.name);
	expect(response.body.description).toBe(findProductByIdData.description);
});
