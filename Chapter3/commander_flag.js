var program = require('commander');

//contained flags: -h, -v, -s, -f
program
		.version('0.0.1')
		.option('-s, --source [web site]', 'Source web site')
		.option('-f,  --file [file name]', 'File name')
		.command('keyword <keyword> [otherKeywords...]')
		.action(function(keyword, otherKeywords){
			console.log('Keyword %s', keyword);
			if(otherKeywords){
				otherKeywords.forEach(function(oKey){
					console.log('keyword %s', oKey);
				});
			}
		});
		
program.parse(process.argv);

console.log(program.source);
console.log(program.file);