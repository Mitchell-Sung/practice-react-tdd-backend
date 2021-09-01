const express = require('express');
const config = require('./config/index.js');
const connectDB = require('./config/connectDB.js');
const productRoute = require('./routes/route.project.js');

const app = express();

app.use(express.json());
app.use('/api/products', productRoute);

app.get('/', (req, res) => {
	res.send('Hello React TDD');
});

connectDB();

app.listen(config.PORT, (error) => {
	if (error) {
		console.error(error);
	}
	console.info(`## Status :>> Running on port ${config.PORT}`);
});
