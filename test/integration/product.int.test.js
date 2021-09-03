import request from 'supertest';
import app from '../../server.js';
import newProduct from '../../data/newProduct.json';

test('POST /api/products', async () => {
	const response = await request(app).post('/api/products').send(newProduct);
	expect(response.statusCode).toBe(201);
	expect(response.body.name).toBe(newProduct.name);
	expect(response.body.description).toBe(newProduct.description);
});

test('should return 500 on POST /api/products', async () => {
	// "request" from supertest package
	const response = await request(app).post('/api/products').send({
		name: 'MacBook Pro',
	});
	expect(response.statusCode).toBe(500);
	expect(response.body).toStrictEqual({
		message:
			'Products validation failed: description: Path `description` is required.',
	});
});
