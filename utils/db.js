const mongoose = require('mongoose');
const { MONGO_URI, MONGO_OPTION } = require('../config');
module.exports = async () => {
	try {
		const { connection } = await mongoose.connect(MONGO_URI, MONGO_OPTION);
		console.log(`MongoDB Connected: ${connection.host}`);
	} catch (err) {
		console.error(err);
		process.exit(1);
	}
};
