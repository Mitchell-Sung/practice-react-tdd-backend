import request from 'supertest';
import app from '../../server.js';

// Data for testing:
const updateTestData = {
	name: 'MacBook Pro M1',
	description: 'MacBook Pro is updated.',
};

// Variables for testing:
const existingProductId = '6133042da9a9a35f4ca893e8';
const nonExistingProductId = '6133042da9a9a35f4ca893c1';

test('PUT /api/products', async () => {
	const res = await request(app)
		.put(`/api/products/${existingProductId}`)
		.send({
			name: updateTestData.name,
			description: updateTestData.description,
		});
	expect(res.statusCode).toBe(200);
	expect(res.body.name).toBe(updateTestData.name);
	expect(res.body.description).toBe(updateTestData.description);
});

test('should return 404 on PUT /api/products', async () => {
	const res = await request(app)
		.put(`/api/products${nonExistingProductId}`)
		.send({
			name: updateTestData.name,
			description: updateTestData.description,
		});
	expect(res.statusCode).toBe(404);
});
