module.exports = function check(str, bracketsConfig) {
	const OPEN_BRACKETS = [], BRACKETS_PAIR = {};
	let stack = [];
	bracketsConfig.forEach(element => {
		BRACKETS_PAIR[element[1]] = element[0];
		OPEN_BRACKETS.push(element[0]);
	});
	for (let i = 0; i < str.length; i++) {
		let currentSymbol = str[i];
		if (stack[stack.length - 1] == currentSymbol && BRACKETS_PAIR[currentSymbol] == currentSymbol) stack.pop();
		else if (OPEN_BRACKETS.includes(currentSymbol)) {
			stack.push(currentSymbol);
		} else {
			if (stack.length === 0) {
				return false;
			}
			let topElement = stack[stack.length - 1];
			if (BRACKETS_PAIR[currentSymbol] === topElement) {
				stack.pop();
			} else {
				return false;
			}
		}
	}
	return stack.length === 0;
}
