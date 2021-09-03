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

// Error handler must always be created at the end.
app.use((error, req, res, next) => {
	res.status(500).json({ message: error.message });
});

app.listen(config.PORT, (error) => {
	if (error) {
		console.error(error);
	}
	console.info(`## Status :>> Running on port ${config.PORT}`);
});

export default app;
