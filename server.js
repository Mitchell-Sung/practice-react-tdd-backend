const express = require('express');

const app = express();

app.set('port', process.env.PORT || 5000);
// const PORT = 5000;

const productRoute = require('./routes/project.route.js');

app.use('/api/products', productRoute);

app.use(express.json());

app.get('/', (req, res) => {
	res.send('Hello React TDD');
});

app.listen(app.get('port'), () => {
	console.log(`## Status :>> Running on port ${app.get('port')}`);
});
// app.listen(PORT);
// console.log(`## Status :>> Running on port ${PORT}`);
