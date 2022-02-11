// arghhhh.js
//
// GitHub: https://github.com/msfninja/arghhhh.js

let names = {
	array: [
		'array', 'arr'
	],
	object: [
		'object', 'obj', 'options', 'opt', 'opts', 'params', 'parameters'
	],
	string: [
		'string', 'path', 'pathname', 'file', 'filename', 'name'
	],
	function: [
		'function', 'callback', 'call', 'func'
	]
};

// Argument reassigner
const reassigner = ([...args]) => {

	let params = [];

	for (var i = args.length - 1; i >= 0; i--) {
		let arg = args[i];

		params.push({
			argument: arg,
			type: typeof(arg)
		});
	}

	return { args, params };
};

// Export functions.
module.exports = function() {

	// Reassigner
	this.reassign = reassigner;
};
