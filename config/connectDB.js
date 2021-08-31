// IMPORT MODULES
const mongoose = require('mongoose');
const config = require('./index.js');

const connectDB = async () => {
	try {
		mongoose.connect(config.MONGODB_URI, {
			useNewUrlParser: true,
			useUnifiedTopology: true,
		});
		console.info(`## Status :>> MongoDB server started on port ${config.PORT}`);
	} catch (error) {
		console.error('## Unable to connect to MongoDB!');
	}
};

module.exports = connectDB;
