var vm = require('vm');
global.count1 = 100;
var count2 = 100;

var text = 'if (count1 == null) var count1 = 0; count1++'+
		   'if (count2 == null) var count2 = 0; count2++;'+
		   'console.log(count1); console.log(count2);';
var script = new vm.Script(text);
script.runInThisContext({filename: 'count.vm'});

console.log(count1);
console.log(count2);