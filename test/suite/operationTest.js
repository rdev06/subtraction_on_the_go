const assert = require('assert');
const operation = require('../../utils/math/operation');
module.exports = () => {
	it('Check that Subtrahend is small then Minuend when flag is false', () => {
		const { M, S, A } = operation(4, 3, false);
		assert(String(M).length == 4, 'Length of Minuend should be equal to given instruction i.e 4');
		assert(String(S).length == 3, 'Length of Subtrahend should be equal to given instruction i.e 3');
		assert(M >= S, 'Minuend should be always greater then or equal to Subtrahend');
		assert(A == M - S, 'Difference between Minuend and Subtrahend is eqaul to Answer');
		assert(A >= 0, 'Answer should be always positive or zero');
	});
	it('Check that Subtrahend is small then Minuend when flag is true', () => {
		const { M, S, A } = operation(4, 3, true);
		assert(String(M).length == 4, 'Length of Minuend should be equal to given instruction i.e 4');
		assert(String(S).length == 3, 'Length of Subtrahend should be equal to given instruction i.e 3');
		assert(M >= S, 'Minuend should be always greater then or equal to Subtrahend');
		assert(A == M - S, 'Difference between Minuend and Subtrahend is eqaul to Answer');
		assert(A >= 0, 'Answer should be always positive or zero');
	});
};
