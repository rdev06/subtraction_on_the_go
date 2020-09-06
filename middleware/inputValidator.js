const validator = require('../utils/math/validator');
module.exports = (req, res, next) => {
	const isValid = validator(req.body);
	if (isValid == 'ok') next();
	else res.json(isValid);
};
