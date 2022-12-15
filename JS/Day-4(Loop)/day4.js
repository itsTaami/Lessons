// let count = 1;
// while (count <= 10){

//     console.log(count);
//     count = count + 1;
// }


// let count = 0;

// while (count <= 10) {

//     if (count % 2 !== 0) {
//         console.log(count);

//     }
//      count += 1;
// }



// let count = 0;

// while (count <= 10) {

//     if (count % 2 == 0) {
//         console.log(count);

//     }
//      count += 1;
// }


// let count = 1;
// while (count <= 100){

//     console.log(count);
//     count = count + 1;
// }




// 100 хүртэлх натурал тооны нийлбэр

// let i = 1, sum = 0;


// while (i <= 100) {
//     // ugj boloh too ---> 1 - 100

//     sum += i;

//     i++
// }

// console.log('n toonii niilber n:', sum);



// // N хүртэлх натурал тооны хэвлэх болон тэдгээр тооны нийлбэр



// let count = 1, n = prompt("Natural too oruulna uu"), N = Number(n), a = 0;

// while (count <= N) {

//     console.log(count);

//     a += count;

//     count++
// }

// console.log("Niilber", a);




// N тооны факториал олох программ бич

// let num = parseInt(prompt("Too oruulna uu.")), fact = 1, i = 1;

// while ( i <= num ) {

//     fact = fact*i;

//     i++;

// }

// console.log(fact);



// Өгөгдсөн эерэг тооны урвуу

// let a = prompt("Toogoo oruulna uu.");
// let b, sum = 0;
// let z = a;
// while (a > 0) {
//     b = a % 10;
//     sum = sum * 10 + b;
//     a = parseInt(a / 10);
// }
// console.log(sum);



// Өгөгдсөн тоог анхны мөн эсэхийг олох


// let a = parseInt(prompt("Too oruulna uu.")), isPrime = true;

// if (a === 2) {
//     console.log(`${a} bol anhnii too mun`);

// }else{

//     let i = 2;
//     while (i < a) {
//         if (a % i === 0) {

//             isPrime = false;

//             break;

//         }

//         i++;

//     }
//     if (isPrime){

//         console.log(` ${a} bol anhnii too mun`);
//     }else{
//         console.log(`${a} bol anhnii too bish`);
//     }
// }


// Өгөгдсөн тооны цифрүүдийн нийлбэр

// let i = 123, sum = 0;


// while (i > 0) {

//     let rem = i % 10;

//     sum = sum + rem;

//     i = parseInt(i / 10);



// }

// console.log(sum);



// N хүртэлх тооны сондгой тоо хэвлэх болон түүний нийлбэр



// let count = 1, n = parseInt(prompt("Too oruulna uu.")), a = 0;

// while (count <= n) {// 2 <= 5

//     if (count % 2 !== 0) {
//         console.log(count); // 1 
//         a += count;
//     }

//     count++;

// }

// console.log('n toonii niilber n:', a);


// x += y // x = x + y




// N хүртэлх тооны тэгш тоо хэвлэх болон түүний нийлбэр



// let count = 1, n = parseInt(prompt("Too oruulna uu.")), a = 0;

// while (count <= n) {// 2 <= 5

//     if (count % 2 == 0) {
//         console.log(count); // 1 
//         a += count;
//     }

//     count++;

// }

// console.log('n toonii niilber n:', a);




// Тооны нийлбэр


// let i = 1, sum = 0; n = parseInt(prompt("Too Oruulna uu"));


// while (i <= n) {
//     // ugj boloh too ---> 1 - 100

//     sum += i;

//     i++
// }

// console.log('n toonii niilber n:', sum);




// Тэгш тоог олох.



// let count = 0, n = parseInt(prompt("Too oruulna uu."))

// while (count <= n) {

//     if (count % 2 == 0) {
//         console.log(count);

//     }
//      count += 1;
// }



// Palindromic-number


// let rem, temp, final = 0;
// let number = parseInt(prompt('Too oruulna uu'));

// temp = number;

// while (number > 0) {
//     rem = number % 10;
//     number = parseInt(number / 10);
//     final = final * 10 + rem;

// }
// if (final == temp) {
//     console.log("The inputed number is Palindrome");
// }
// else {
//     console.log("The inputted number is not palindrome");
// }

// N тооны факториал олох программ бич


// let num = parseInt(prompt("Too oruulna uu.")), fact = 1, i = 1;

// while ( i <= num ) {

//     fact = fact*i;

//     i++;

// }

// console.log(fact);

// let x = parseInt(prompt("Too oruulna uu")); 
// let temp, c = 0;

// temp = x;

// while (temp !== 0) {


//     temp = parseInt(temp/10);

//     c++

// }

// console.log(` Number of digit`, c);



// let rows = parseInt(prompt("Too oruulna uu"));



// for (let i = 0; i < rows; i++) {
//     let output = '0';
//     for (let j = 0; j < rows - i; j++) 
// output += '5';
//     for (let k = 0; k <= i; k++) 
// output += ' *';
//     console.log(output);
// }

// console.log(rows);


// Davhar davtalt - 1

// let rows = Number(prompt("..."));

// let output = ` `;

// for (let i = 1; i <= rows; i++) {

//     output = ` `;

//     for (let j = i; j <= rows; j++) {
        

//         output += `${j} `;
        
        
//     }

//     console.log(output);
    
// }




// Davhar davtalt - 2

// let rows = Number(prompt("..."));

// let output = ` `;

// for (let i = 1; i <= rows; i++) {

//     output = ` `;

//     for (let j = 1; j < i + 1; j++) {
        

//         output += `${j} `;
        
        
//     }

//     console.log(output);
    
// }


// let n = 5; // row or column count
// // defining an empty string
// let string = "";

// for(let i = 0; i < n; i++) { // external loop
//   for(let j = 0; j < n; j++) { // internal loop
//     if(i === 0 || i === n - 1) {
//       string += "*";
//     }
//     else {
//       if(j === 0 || j === n - 1) {
//         string += "*";
//       }
//       else {
//         string += " ";
//       }
//     }
//   }
//   // newline after each row
//   string += "\n";
// }
// // printing the string
// console.log(string);