/**
 * this file is made meant to validate the inputs
 *
 * Number of Questions = nQ @Number
 * Number of digits in minuend (first number in subtraction) = mN @Number between 1 to 10
 * Number of digits in subtrahend (second number in subtraction) = sN @Number between 1 to 10
 * flag @Boolean
 */

const range = {
	L: 1,
	U: 10
};

function validator({ nQ, mN, sN, flag }, cb) {
	const errors = [];
	if (typeof nQ != 'number') errors.push('Number of Questions as nQ must be an integer and required');
	if (typeof mN != 'number') errors.push('Number of digits in minuend (first number in subtraction) as mN must be an integer and required');
	if (typeof sN != 'number') errors.push('Number of digits in subtrahend (second number in subtraction) as sN must be an integer and required');
	if (typeof flag != 'boolean') errors.push('flag must be Boolean and required');
	if (!checkInputRange(mN)) errors.push(`Minuend as mN should be between ${range.L} to ${range.U}`);
	if (!checkInputRange(sN)) errors.push(`Subtrahend as sN should be between ${range.L} to ${range.U}`);
	if (mN < sN) errors.push(`Number of Subtrahend should be less then Minuend or equal to`);
	if (errors.length) return errors;
	else return 'ok';
}

//check inputs from range
function checkInputRange(number) {
	const input = parseInt(number);
	if (input >= range.L && input <= range.U) return true;
	else return false;
}

/* console.log(
	validator({
		nQ: 4,
		mN: 4,
		sN: 4,
		flag: false
	})
); */

module.exports = validator;
