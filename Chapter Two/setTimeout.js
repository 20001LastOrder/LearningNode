var timer1 = setTimeout(function(name){
	console.log('Hello ' + name);
}, 3000, "Percy");

console.log("waiting on timer");

//cancel a timer
setTimeout(function(timer){
	clearTimeout(timer);
	console.log("timer is cleared");
}, 2000, timer1);