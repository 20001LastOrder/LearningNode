var interval = setInterval(function(name){
	console.log('hello ' + name);
}, 3000, 'Percy');

setTimeout(function(interval){
	clearInterval(interval);
	console.log("interval is cleared");
}, 30000, interval);

console.log('Waiting on first interval');