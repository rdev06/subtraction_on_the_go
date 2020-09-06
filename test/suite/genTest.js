const assert = require('assert');
const gen = require('../../utils/math/gen');

module.exports = () => {
	it('Testing for Minuend when length should be 5 and flag is false', () => {
		const no = gen(5, 'M', false);
		const sno = String(no);
		assert(sno.length == 5, 'Length of generated number is 5');
		assert(
			sno
				.slice(1)
				.split('')
				.filter(s => parseInt(s) < 5).length == 0,
			'Apart from the first digit all values are less then 5'
		);
		assert(sno.slice(0, 1) > 5, 'First letter is always greater then 5');
	});
	it('Testing for Minuend when length should be 5 and flag is true', () => {
		const no = gen(5, 'M', true);
		const sno = String(no);
		assert(sno.length == 5, 'Length of generated number is 5');
		assert(
			sno
				.slice(1)
				.split('')
				.filter(s => parseInt(s) > 5).length == 0,
			'Apart from the first digit all values are more then 5'
		);
		assert(sno.slice(0, 1) > 5, 'First letter is always greater then 5');
	});
	it('Testing for Subtrahend when length should be 5 and flag is false', () => {
		const no = gen(5, 'S', false);
		const sno = String(no);
		assert(sno.length == 5, 'Length of generated number is 5');
		assert(
			sno
				.slice(1)
				.split('')
				.filter(s => parseInt(s) > 5).length == 0,
			'Apart from the first digit all values are more then 5'
		);
		assert(sno.slice(0, 1) < 5, 'First letter is always less then 5');
	});
	it('Testing for Subtrahend when length should be 5 and flag is true', () => {
		const no = gen(5, 'S', true);
		const sno = String(no);
		assert(sno.length == 5, 'Length of generated number is 5');
		assert(
			sno
				.slice(1)
				.split('')
				.filter(s => parseInt(s) < 5).length == 0,
			'Apart from the first digit all values are less then 5'
		);
		assert(sno.slice(0, 1) < 5, 'First letter is always less then 5');
	});
};
