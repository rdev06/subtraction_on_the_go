const assert = require('assert');
const get = require('../../utils/math/get');
module.exports = () => {
	it('Generating number of question according to requirement', () => {
		const Result = get({
			nQ: 4,
			mN: 4,
			sN: 4,
			flag: false
		});
		assert(Array.isArray(Result), 'Result must be array');
		assert(Result.length == 4, 'Lenth of generated total question must be equal to 4');
	});
};
