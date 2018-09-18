var fs = require('fs'),
	async = require('async'),
	_dir = './data/';

var writeStream = fs.createWriteStream('./log.txt', {
	'flag' : 'a',
	'mode' : '0666',
	'encoding' : 'utf8'
});

async.waterfall([
	function readDir(callback){
		fs.readdir(_dir, function(err, files){
			callback(err, files);
		});
	},
	function loopFiles(files, callback){
		// the loop function will call the functions after iteratively(DOESN'T WORK)
		// need to define a new water fall
		files.forEach(function(name){
			async.waterfall([
				function checkFile(callback){
					fs.stat(_dir+name, function(err, stats){
						if(stats.isFile()){
							callback(err, name);
						}
					});
				},
				function readData(file, callback){
					fs.readFile(_dir+file, 'utf8', function(err, data){
						callback(err, file, data);
					});
				},
				function modify(file, data, callback){
					var adjData = data.replace(/somecompany\.com/g, 'www.google.con');
					callback(null, file, adjData);
				},
				function writeData(file, text, callback){
					fs.writeFile(_dir+'/adjData/adj'+file, text, function(err){
						callback(err, file);
					});
				},
				function logChange(file, callback){
					writeStream.write('changed'+file+'\n', 'utf8', function(err){
						callback(err);
					});
				}
			], function(err){
				if(err){
					console.log(err);
				}else{
					console.log('Finished Modify');
				}	
			});
		});
		callback(null);
	},
], function(err){
	if(err){
		console.log(err);
	}else{
		console.log('read Files');
	}
});	

var processFile =[
	function checkFile(file, callback){
		fs.stat(_dir+file, function(err, stats){
			if(stats.isFile()){
				callback(err, file);
			}
		});
	},
	function readData(file, callback){
		fs.readFile(_dir+file, 'utf8', function(err, data){
			callback(err, file, data);
		});
	},
	function modify(file, data, callback){
		var adjData = data.replace(/somecompany\.com/g, 'www.google.con');
		callback(null, file, adjData);
	},
	function writeData(file, text, callback){
		fs.writeFile(_dir+'/adjData/adj'+file, text, function(err){
			callback(err, file);
		});
	},
	function logChange(file, callback){
		writeStream.write('changed'+file+'\n', 'utf8', function(err){
			callback(err);
		});
	}
];