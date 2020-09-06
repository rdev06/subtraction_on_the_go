const express = require('express');
const get = require('./utils/math/get');
const defaultData = require('./default.json');
const app = express();
const inputValidator = require('./middleware/inputValidator');
const { PORT } = require('./config');

//for database

const querySchema = require('./model/querySchema');

// Body parser
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//Execute mongodb;
require('./utils/db')();

app.get('/favicon.ico', (req, res) => res.end());
app.get('/', (req, res) => res.json(get(defaultData)));
app.post('/', inputValidator, (req, res) => res.json(get(req.body)));
app.post('/save', inputValidator, (req, res) =>
	querySchema
		.create(req.body)
		.then(query => res.json(query))
		.catch(err => console.log(err))
);
app.get('/listSave', (req, res) =>
	querySchema
		.find()
		.then(queries => res.json(queries))
		.catch(err => console.log(err))
);
app.get('/:saveId', (req, res) =>
	querySchema
		.findById(req.params.saveId)
		.then(query => res.json(get(query)))
		.catch(err => console.log(err))
);

app.listen(PORT, () => console.log(`server is running on port ${PORT}`));
