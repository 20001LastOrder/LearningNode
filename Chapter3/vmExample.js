var vm = require('vm');

var sandbox = {
	process: 'this baby',
	require: 'that',
	console: console //with out that, an error will occur, because the new context doesn't have
					 //access to the global console object
};

vm.runInNewContext('console.log(process); console.log(require)', sandbox);