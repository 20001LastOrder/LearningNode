var interval = setInterval(function(name){
	console.log('hello ' + name);
}, 300, 'Percy')

var timer = setTimeout(function(name, interval){
	interval.unref();
	console.log('Bye' + name);
}, 700, 'Percy', interval);

timer.unref();

console.log('wait on timer');