/*jshint esversion: 6 */
"use strict"

let StringDecoder = require('string_decoder').StringDecoder;
let decoder = new StringDecoder('utf8');

let euro = new Buffer([0xE2]);
let euro2 = new Buffer([0x82]);
let euro3 = new Buffer([0xAC]);

// wait for all octets to complete the euro sign
console.log(decoder.write(euro)); //empty line
console.log(decoder.write(euro2)); //empty line
console.log(decoder.write(euro3)); //euro sign

//log out right away
console.log(euro.toString()); //gibberish
console.log(euro2.toString()); //gibberish