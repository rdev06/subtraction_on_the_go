const assert = require('assert');
const genQues = require('../../utils/math/genQues');
module.exports = () => {
	it('Gerate proper question when flag is false', () => {
		const { Minuend, Subtrahend, Correct_Answer, Options } = genQues(3, 2, false);
		assert(String(Minuend).length == 3, 'Length of Minuend should be equal to 3');
		assert(String(Subtrahend).length == 2, 'Length of Subtrahend should be equal to 2');
		assert(Correct_Answer == Minuend - Subtrahend, 'Correct answer should be difference of Minuend and Subtrahend');
		assert(Correct_Answer >= 0, 'Correct answer should not be negative');
		assert(Options.indexOf(Correct_Answer) != -1, 'Correct answer should be present somewhere in options');
	});
	it('Gerate proper question when flag is true', () => {
		const { Minuend, Subtrahend, Correct_Answer, Options } = genQues(3, 2, true);
		assert(String(Minuend).length == 3, 'Length of Minuend should be equal to 3');
		assert(String(Subtrahend).length == 2, 'Length of Subtrahend should be equal to 2');
		assert(Correct_Answer == Minuend - Subtrahend, 'Correct answer should be difference of Minuend and Subtrahend');
		assert(Correct_Answer >= 0, 'Correct answer should not be negative');
		assert(Options.indexOf(Correct_Answer) != -1, 'Correct answer should be present somewhere in options');
	});
};
