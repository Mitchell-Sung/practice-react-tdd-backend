import express from 'express';
import config from './config/index.js';
import connectDB from './config/connectDB.js';
import productRoute from './routes/route.project.js';

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
