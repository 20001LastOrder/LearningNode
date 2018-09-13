/*jslint node: true */
/*jshint esversion: 6 */
"use strict";

var util = require('util');
var eventEmitter = require('events').EventEmitter;
var fs = require('fs');

function InputChecker(name, file){
	this.name = name;
	this.writeStream = fs.createWriteStream('./' + file + '.txt', 
		{
			'flags': 'a',
			'encoding': 'utf8',
			'mode' : '0o666'
		});
}

util.inherits(InputChecker, eventEmitter);

InputChecker.prototype.check = function(input){
	//trim extraneou white space
	let command = input.trim().substr(0, 3);

	//process command
	//if wr, write input to file
	if(command == 'wr:'){
		this.emit('write', input.substr(3, input.length));
	}else if(command == "en:"){
		//if en, end process
		this.emit('end');
	}else{
		//just echo back to standard output
		this.emit('echo', input);
	}
};

//testing new object and event handling
let ic = new InputChecker('Shelly', 'output');

ic.on('write', function(data){
	this.writeStream.write(data);
});

ic.on('echo', function(data){
	process.stdout.write(data);
});

//this add listener is exactly equivalent to on
ic.addListener('echo', function(data){
	process.stdout.write(this.name + ' wrote ' + data);
});

//this is for listen an event once
ic.once('echo', function(data){
	process.stdout.write('this is the fisrt echo: ' + data);
});

ic.on('end', function(){
	process.exit();
});

//capture input after endcoding
process.stdin.setEncoding('utf8');
process.stdin.on('readable', function(){
	let input = process.stdin.read();
	if(input){
		ic.check(input);
	}
});


