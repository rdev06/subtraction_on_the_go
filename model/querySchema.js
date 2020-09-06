const mongoose = require('mongoose');
const querySchema = mongoose.Schema({
	nQ: { type: Number },
	mN: { type: Number },
	sN: { type: Number },
	flag: { type: Boolean }
});

module.exports = mongoose.model('query', querySchema);
