var fs = require('fs'),
	async = require('async');

async.waterfall([
	function readData(callback){
		fs.readFile('./data/data1.txt', 'utf8', function(err, data){
			callback(err, data); // the data followed err will be passed as argument to the next function
		});
	},
	function modify(data, callback){
		var adjData = data.replace(/somecompany\.com/g, 'www.google.com');
		callback(null, adjData);
	},
	function write(adjData, callback){
		fs.writeFile('./data/adjData1.txt', adjData, function(err){
			callback(err, adjData);
		});
	}
], function(err, result){
	if(err){
		//this will be accessed EVERY TIME when there is an error
		console.log(err);
	}else{
		//this is only accessable when all function calls are finished
		console.log(result);
	}
});