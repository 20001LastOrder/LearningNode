var fs = require('fs');

fs.readFile('./apple.txt', 'utf8', function(err, data){
	if(err){
		console.log(err); 
		return;
	}

	var adjData = data.replace(/apple/g, 'organge');

	fs.writeFile('./oranges.txt', adjData, function(err){
		if (err) console.log(err);
	});
});