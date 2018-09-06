//store integers into buffer
var buf = new Buffer(4);

buf.writeUInt8(0x63, 0);
buf.writeUInt8(0x61, 1);
buf.writeUInt8(0x74, 2);
buf.writeUInt8(0x73, 3);

console.log(buf.toString());

//slice buffer
var buf1 = new Buffer('this is the way we build our buffer');
var length = buf1.length;

//create new buffer as slice of old 
var buf2 = buf1.slice(19, length);
console.log(buf2.toString());  //'build our buffer'

//modify second buffer
buf2.fill('*', 0, 5);
console.log(buf2.toString()); //'***** our buffer'

//show impact on the first buffer
console.log(buf1.toString()); //this is the way we ***** our buffer

//other manipulation
//buffer.equal()
//buffer.copy() if the second buffer is not large enough to hold all of the contents, you'll only get the portion of the bytes that fit
buf1 = new Buffer('this is a new buffer with a string');

//copy buffer
buf2 = new Buffer(10);
buf1.copy(buf2);
console.log(buf2.toString()); //this is a 

//buffer.compare()
buf1 = new Buffer('1 is number one');
buf2 = new Buffer('2 is number two');

var buf3 = new Buffer(buf1.length);
buf1.copy(buf3);

console.log(buf1.compare(buf2)); //-1
console.log(buf2.compare(buf1)); //1
console.log(buf3.compare(buf1)); //0


