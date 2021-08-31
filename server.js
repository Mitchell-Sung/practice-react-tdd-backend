import express from 'express';

const PORT = 5000;

const app = express();

app.get('/', (req, res) => {
	res.send('Hello React TDD');
});

app.listen(PORT);

console.log(`Status :>> Running on port ${PORT}`);
