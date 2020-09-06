const gen = () => parseInt(Math.random() * 10);

//keeping range to 5 because this would give best optimizing result
function genNumber(of, type, flag, range = 5) {
	let gt = '>';
	let lt = '<';
	if (type != 'M') {
		const newGt = gt;
		gt = lt;
		lt = newGt;
	}
	let number = '';
	function append(appender) {
		//check for first letter
		if (!number) {
			// console.log(appender);
			// if 'M' then first letter should not be less then 5
			if (type == 'M' && appender > range) number += appender;
			// if 'S' then first letter should not be greater then 5 but not less then 1
			if (type == 'S' && appender < range && appender > 0) number += appender;
		} else number += appender;
	}
	if (flag) {
		// need to keep numbers less than range
		while (number.length != of) {
			const no = gen();
			if (!number) append(no);
			else if (eval(no + lt + range)) append(no);
		}
		return parseInt(number);
	} else {
		// need to keep numbers more than range
		while (number.length != of) {
			const no = gen();
			if (eval(no + gt + range)) append(no);
		}
		return parseInt(number);
	}
}

module.exports = genNumber;
