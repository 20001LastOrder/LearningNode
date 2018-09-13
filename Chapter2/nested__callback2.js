var fs = require('fs');
var encoding = 'utf8';
var dir = './data/';
var counter = 0;

var writeStream = fs.createWriteStream('./log.txt',
{
	'flags': 'a',
	'encoding': encoding,
	'mode': '0666'
});

writeStream.on('open', function(){
	//get list of file names
	fs.readdir(dir, function(err, files){
		//for each file
		if(err){
			console.log(err.message);
			return;
		}
		files.forEach(function(name){
			//check if the file is a dir, stat retun object contains information about this
			fs.stat(dir+name, function(err, stats){
				if(err) return err;
				if(!stats.isFile()){
					console.log(name+' is not a file');
					counter++;
					return;
				}
				//modigy contents
				fs.readFile(dir + name, encoding, function(err, data){
					if(err){
						console.log(err.message);
						return;
					}
					var adjData = data.replace(/somecompany\.com/g, 'burningbird.net');

					//write to file
					fs.writeFile(dir+name, adjData, function(err){
						if(err){
							console.log(err.message);
							return;
						}
						//log writing
						writeStream.write('changed 1 '+name+'\n', encoding, function(err){
							if(err){
								console.log(err.message);
								return;
							}
							console.log('finished '+name);
							if(++counter >= files.length){
								console.log('all done');
							}
						});
					});
				});
			});
		});
	});
});

writeStream.on('error', function(err){
	console.log('ERR: '+err);
});