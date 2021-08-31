const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true,
	},
	description: {
		type: String,
		required: true,
	},
	price: {
		type: number,
	},
});

const Products = mongoose.model('Products', productSchema);

module.exports = Products;
