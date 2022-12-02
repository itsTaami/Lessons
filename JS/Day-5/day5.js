
// let rows = parseInt(prompt("Too oruulna uu"));


// let i = 0;

// while (i < rows) {

//     i++
//     let output = '';
//     let j = 0;

//     while (j < rows - i) {

//         j++
//         output += ' ';

//     }

//     let k = 0;
//     while (k < i) {

//         k++
//         output += '* ';

//     }

//     console.log(output);
// }

// console.log(rows);


let e = parseInt(prompt("Duriin too"));

let q = parseInt(prompt("Duriin too"));

let isTrue = true

let max,min;
if (e < q) {

    max=q;
    min=e;
    
}else{

    max=e;
    min=q;
}


let random = Math.round(Math.random() * (max-min) + min);

console.log(`Random: ${random}`);

let erh = 2 ;

let ntoo = 0 ;

while (erh>0) {

    ntoo = prompt("Taah too");
    ntoo = Number(ntoo);
    if (ntoo === random) {

        isTrue = true;
        break;
    }
    else{
        erh = erh-1;
        console.log(`Too taah erh ${erh},${ntoo},${random} baina. ` );
        isTrue = false;
    }
    
}

if (isTrue) {

    console.log(`${ntoo} ni Random tootoi taarj baina.`);
    
} else{
    console.log(`${ntoo} ni Random tootoi taarahgui baina.`);
}





// let number = parseInt(prompt("too oruulna uu JN:5"));
// let string =''; 
// for(let i=1; i<=number; i++){
//   for(let j=1; j<=number; j++){
//     if(i===1 || i===number){
//       string += '*';
//     }else if(true){
//       if(j===1 || j===number){
//         string += '*';
//       }else{
//         string +=' ';
//       }
//     }
//   }
//   string += '\n';
// }

// console.log(number);
// console.log(string);



// let guess = 5;

//     // generating a random integer from 1 to 10
//     const random = Math.floor(Math.random() * 5) + 1;

//     // take input from the user
//     let number = parseInt(prompt('Guess a number from 1 to 10: '));

//     // take the input until the guess is correct
//     while(number !== random) {
//         number = parseInt(prompt('Guess a number from 1 to 10: '));
//     }

//     // check if the guess is correct
//     if(number == random) {
//         console.log('You guessed the correct number.');
//     }

// // call the function


