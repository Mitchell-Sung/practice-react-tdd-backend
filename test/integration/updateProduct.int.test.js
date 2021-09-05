import request from 'supertest';
import app from '../../server.js';
import updateProductData from '../../data/updateProduct.json';

const productId = '6133042da9a9a35f4ca893e8';

test('PUT /api/products', async () => {
	const response = await request(app).put(`/api/products/${productId}`).send({
		name: updateProductData.name,
		description: updateProductData.description,
	});
	expect(response.statusCode).toBe(200);
	expect(response.body.name).toBe(updateProductData.name);
	expect(response.body.description).toBe(updateProductData.description);
});
