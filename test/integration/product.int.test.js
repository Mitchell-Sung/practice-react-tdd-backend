import request from 'supertest';
import app from '../../server.js';
import newProduct from '../../data/newProduct.json';

test('POST /api/products', async () => {
	const response = await request(app).post('/api/products').send(newProduct);
	expect(response.statusCode).toBe(201);
	expect(response.body.name).toBe(newProduct.name);
	expect(response.body.description).toBe(newProduct.description);
});
