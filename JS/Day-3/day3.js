
// Escape sequence


let msg = `Hello I am "Name Here". \nI am 'Age here' years old. \n \ \ \ This is the new line with tab and some \ \ \.`

console.log(msg);


// Simple assignment

// Simple assignment - 1


const str = 'Battamir' , str2 = 'Enkhtur';

console.log(str.length );
console.log(str2.length);


// Simple assignment - 2, 3 

console.log(str.toUpperCase());
console.log(str2.toLowerCase());

// Simple assignment - 4

const u1 = 'Pinecone academy-н ';
const u2 = u1.concat('','leap хөтөлбөрт тавтай морилго уу');

console.log(u2);

// Simple assignment - 5 


let firstName = 'Battamir', LastName = 'Enkhtur', country = 'Mongolia', city = 'Ulaanbaatar', age = '21', job = 'Oyutan';

console.log( 'Namaig', firstName, 'gedeg.', 'Bi', city ,'-d', 'amidardag' );



// Simple assignment - 6

console.log( '1 2 3 4 5', '\n2 3 4 5 1', '\n3 4 5 1 2', '\n4 5 1 2 3', '\n5 1 2 3 4' );


// Огноо хэвлэн гаргах, Операторыг олох

// 1

let year = prompt('Jilee oruulna uu');
let month = prompt('Saraa oruulna uu');
let day = prompt('Uduruu oruulna uu');

let number1 = ('0' + month).slice(-2);
let number2 = ('0' + day).slice(-2);

console.log(year + "-" + number1 + '-' + number2);












