/**
 * this file is used to get required data for output
 */

const genQues = require('./genQues');

function get({ nQ, mN, sN, flag }) {
	const questions = [];
	while (questions.length != nQ) {
		questions.push(genQues(mN, sN, flag));
	}
	return questions;
}

/* console.log(
	get({
		nQ: 4,
		mN: 4,
		sN: 4,
		flag: false
	})
); */

module.exports = get;
