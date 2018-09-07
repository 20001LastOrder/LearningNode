var fs = require('fs');
var encoding = 'utf8';
var dir = './data/';

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
					writeStream.write('changed'+name+'\n', encoding, function(err){
						if(err){
							console.log(err.message);
						}
					});
				});
			});
		});
	});
});