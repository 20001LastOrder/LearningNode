/*jshint esversion: 6 */
"use strict";

let buf = new Buffer("This is my pretty example");
let json = JSON.stringify(buf);

//This will output a stirng with a json with an array of all the unicode # for each char inside the string
//as a sequence of octets
console.log(json);

//convert json string back to buffer data
let buf2 = new Buffer(JSON.parse(json).data);

console.log(buf2.toString()); //this is my pretty example (utf-8)
console.log(buf2.toString('ascii')); //this is my pretty example (acsii)

//specify a starting and ending place in the string conversion include "start", does not include "end"
console.log(buf2.toString("utf8", 0, 4)); //this
