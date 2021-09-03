import request from 'supertest';
import app from '../../server.js';

test('GET /api/products', async () => {
	const response = await request(app).get('/api/products');
	expect(response.statusCode).toBe(200);
	expect(Array.isArray(response.body)).toBeTruthy();
	expect(response.body[0].name).toBeDefined();
	expect(response.body[0].description).toBeDefined();
});
