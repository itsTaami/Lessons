
// // Escape sequence


// let msg = `Hello I am "Name Here". \nI am 'Age here' years old. \n \ \ \ This is the new line with tab and some \ \ \.`

// console.log(msg);


// // Simple assignment

// // Simple assignment - 1


// const str = 'Battamir' , str2 = 'Enkhtur';

// console.log(str.length );
// console.log(str2.length);


// // Simple assignment - 2, 3 

// console.log(str.toUpperCase());
// console.log(str2.toLowerCase());

// // Simple assignment - 4

// const u1 = 'Pinecone academy-н ';
// const u2 = u1.concat('','leap хөтөлбөрт тавтай морилго уу');

// console.log(u2);

// // Simple assignment - 5 


// let firstName = 'Battamir', LastName = 'Enkhtur', country = 'Mongolia', city = 'Ulaanbaatar', age = '21', job = 'Oyutan';

// console.log( 'Namaig', firstName, 'gedeg.', 'Bi', city ,'-d', 'amidardag' );



// // Simple assignment - 6

// console.log( '1 2 3 4 5', '\n2 3 4 5 1', '\n3 4 5 1 2', '\n4 5 1 2 3', '\n5 1 2 3 4' );


// // Огноо хэвлэн гаргах, Операторыг олох

// // 1

// let year = prompt('Jilee oruulna uu');
// let month = prompt('Saraa oruulna uu');
// let day = prompt('Uduruu oruulna uu');

// let number1 = ('0' + month).slice(-2);
// let number2 = ('0' + day).slice(-2);

// console.log(year + "-" + number1 + '-' + number2);




// random number between

// // input from the user
// const min = parseInt(prompt(" Duriin too oruulnuu"));
// const max = parseInt(prompt(" Duriin too oruulna uu"));

// // generating a random number
// const a = Math.floor(Math.random() * (max - min + 1 )) + min;

// // display a random number
// console.log(`Random value between ${min} and ${max} is ${a}`);



// Nearest number

// let n = prompt('butarhai too :).');
// n= Number(n);
// console.log(Math.round(n));





// numbers-sum

// let value = 555,
//     sum = 0;

// while (value) {
//     sum += value % 10;
//     value = Math.floor(value / 10);
// }

// console.log(sum);

// // input from the user
// const min = parseInt(prompt(" Duriin too oruulnuu"));
// const max = parseInt(prompt(" Duriin too oruulna uu"));

// // generating a random number
// const a = Math.floor(Math.random() * (max - min + 1 )) + min;

// // display a random number
// console.log(`Random value between ${min} and ${max} is ${a}`);

// let dugaar = prompt("Utasnii dugaar oruulna uu.");

// dugaar = Number(dugaar);


// if (typeof(dugaar) != Number) {

//     console.log(`Error`)
    
// }else(
//     console.log(`Correct`)
// )

var num1 = "+97689844470";

num1 = Number(num1);

 if(typeof num1 === 'number'){
	console.log(num1 + " is a number ");
 }else{
	console.log(num1 + " is not a number ");
 }

















