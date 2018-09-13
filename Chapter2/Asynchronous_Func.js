var  fib = function(n){
	if (n < 2) return n;
	return fib(n-1) + fib(n-2);
};

var Obj = function(){};

Obj.prototype.doSomething = function(arg1_){
	var callback_ = arguments[arguments.length-1];
	var callback = (typeof(callback_)) == 'function'? callback_ : null;
	var arg1 = (typeof(arg1_)) == 'number'? arg1_ : null;

	if(!arg1){
		return callback(new Error("first arg missing or not a number"));
	}

	process.nextTick(function(){
		//this operation might block cpu
		var data = fib(arg1);
		callback(null, data);	
	});
};

Obj.prototype.simpleThing = function(arg1_){
	var callback_ = arguments[arguments.length-1];
	var callback = typeof(callback_) == 'function'? callback_ : null;
	var arg1 = typeof(arg1_) == 'number'? arg1_ : null;
	
	if(!arg1){
		return callback(new Error("first arg missing or not a number"));
	}

	process.nextTick(function(){
		callback(null, arg1);
	});
}

var test = new Obj();
var fibNumber = Number(process.argv[2]);
var number = isNaN(fibNumber)?  null : fibNumber;

if(!number){
	console.log(new Error("must run with one number argument"));
}else{
	test.doSomething(number, function(err, data){
		if(err){
			console.log(err);
		}else{
			console.log("fibonacci value for %d is %d", number, data);
		}
	});

	console.log("called something");

	test.simpleThing(number, function(err, data){
		if(err){
			console.log(err);
		}else{
			console.log("the returned value is %d", data);
		}
	});

	console.log("called simpleThing");
	console.log("Important");
}

