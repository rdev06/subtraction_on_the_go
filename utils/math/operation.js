/**
 * this file is intended to generate Minuend and Subtrahend
 */

const gen = require('./gen');

function genMinuendSubtrahend(mN, sN, flag) {
	//only have to check that Subtrahend is small then Minuend.
	let M = gen(mN, 'M', flag);
	let S = gen(sN, 'S', flag);
	while (M < S) {
		M = gen(mN, 'M', flag);
		S = gen(sN, 'S', flag);
	}
	return { M, S, A: M - S };
}

// console.log(genMinuendSubtrahend(4, 3, false));

module.exports = genMinuendSubtrahend;
