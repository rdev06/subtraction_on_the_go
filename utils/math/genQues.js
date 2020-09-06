/**
 * this file is made to generate a question
 */

const operation = require('./operation');
const nO = 4; //number of option
const shuffleProbability = 0.5;

function genQues(mN, sN, flag) {
	const { M, S, A } = operation(mN, sN, flag);
	const option = [A];
	while (option.length != nO) {
		const newNumber = parseInt(Math.random() * Math.pow(10, String(A).length));
		if (option.indexOf(newNumber) == -1) option.push(newNumber);
	}
	return { Minuend: M, Subtrahend: S, Correct_Answer: A, Options: option.sort(() => Math.random() - shuffleProbability) };
}

// console.log(genQues(3, 3, false));
module.exports = genQues;
