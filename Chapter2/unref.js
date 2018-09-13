var interval = setInterval(function(name){
	console.log('hello ' + name);
}, 3000, 'Percy')

var timer = setTimeout(function(name, interval){
	clearInterval(interval);
	console.log('Bye' + name);
}, 30000, 'Percy', interval);

timer.unref();

console.log('wait on timer');