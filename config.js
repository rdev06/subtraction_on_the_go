module.exports = {
	PORT: process.env.PORT || 5004,
	MONGO_URI: 'mongodb://roshan:strong1@ds145639.mlab.com:45639/udayy',
	MONGO_OPTION: {
		useNewUrlParser: true,
		useUnifiedTopology: true,
		useFindAndModify: false,
		useCreateIndex: true
	}
};
