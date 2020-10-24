const express = require('express');
const helmet = require('helmet');
const middlewares = require('./middlewares');
const MongoClient = require('mongodb').MongoClient;
require('dotenv').config();

const port = process.env.PORT || 3000;

const { MONGO_USERNAME, MONGO_PASSWORD, MONGO_DBNAME } = process.env;
const mongoUri = `mongodb+srv://${MONGO_USERNAME}:${MONGO_PASSWORD}@main.92lno.azure.mongodb.net/${MONGO_DBNAME}?retryWrites=true&w=majority`;

const client = new MongoClient(mongoUri, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
});

client.connect((err) => {
	if (err) throw err;
	console.log('Connected to server');
	const db = client.db(MONGO_DBNAME);
	const collection = db.collection('cases');
	console.log(collection);
	client.close();
});

const app = express();
app.use(helmet());

app.get('/', (req, res) => {
	res.send('hello world!');
});

app.get('/hello', (req, res) => {
	res.send('hello');
});

app.use(middlewares.notFound);
app.use(middlewares.errorHandler);

app.listen(port, (err) => {
	if (err) throw err;
	console.log(`Listening on port ${port}`);
});
