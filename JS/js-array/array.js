// let studentNames = ['boldo', 'dorjo', 'tsetsgee', 'dulmaa'];
// let i = 0 ;

// while ( i < studentNames.length) {
//     if (studentNames [i] [0] === 'd') {
//         console.log((studentNames[i]));

//     }

//     i++;

// }


// let studentAges = [ 10, 20, 15, 19, 18, 19,19];
// let i = 0 ;
// let sum = 0;

// while ( i < studentAges.length) {
//     sum+=studentAges[i]
//     i++; 
// }
// console.log(`elementuudiin niilber ${sum}`);
// let average = sum/studentAges.length
// console.log(average);


// let userBalance = [1000, 2000, 2500, 4000000, 13054, 323425]
// let i = 0;

// while ( i < userBalance.length) {
//     userBalance[i] *=1.15;

//     i++;

// }

// console.log(userBalance);




// Array of numbers

// let arrayOfNumbers = [ 43, 56, 23, 89, 88, 90, 99, 652, 15, 290, 11 ]; //1
// let max = 0;


// let i = 0,sum=0;

// while ( i < arrayOfNumbers.length) {   //2

//     sum +=arrayOfNumbers[i];
//     i++    ;
// }

// console.log(sum);

// for( let i=0; i <arrayOfNumbers.length; i++){ //3
//     if (max < arrayOfNumbers[i]) {
//         max = arrayOfNumbers[i];

//     }
// }
// console.log(`max ni: ${max}`);


// let min = 0;

// for ( let i = 0; i < arrayOfNumbers.length; i++){ //4

//     if (min = arrayOfNumbers[i] ) {
//         min < arrayOfNumbers[i];
//     }
// }

// console.log(`min ni: ${min}`);

// let f = parseInt(prompt(`Garaas too avna uu.`));  //5

// let niilber = (arrayOfNumbers[0] +f );

// console.log(niilber);


// let l = parseInt(prompt(`Garaas too avna uu.`));  //6

// let niil = (arrayOfNumbers[10] +l );

// console.log(niil);



// Simple Array -1 

// let itCompanies = [`Facebook`, `Google`, `Microsoft`, `Apple`, `IBM`, `Oracle`, `Amazon`];

// console.log(itCompanies);

// console.log(itCompanies.length);

// console.log(itCompanies[0],itCompanies[3],itCompanies[6]);

// console.log(itCompanies[0],itCompanies[1],itCompanies[2],itCompanies[3],itCompanies[4],itCompanies[5],itCompanies[6]);

// console.log(itCompanies[1].toUpperCase());

// console.log(itCompanies[1].charAt(0));


// console.log(`${itCompanies} зэрэг мэдээллийн технологийн томоохон компаниуд.`);


// let itCompanies = [`Facebook`, `Google`, `Microsoft`, `Apple`, `IBM`, `Oracle`, `Amazon`]

// console.log(itCompanies.slice(0, 3));

// // console.log(itCompanies.slice(4,7));

// // console.log(itCompanies.slice(0,1));

// console.log(itCompanies.slice(itCompanies.length - 3));

// itCompanies.pop();
// console.log(`pop: ${itCompanies}`);

// let itCompanies2 = [`Facebook`, `Google`, `Microsoft`, `Apple`, `IBM`, `Oracle`, `Amazon`]

// itCompanies2.shift();
// console.log(`shift: ${itCompanies2}`);



// let i = 0;
// while (i < data.length) {

// if (data === "нүүрс") {

//     console.log((data[i]));

// }
// i++}

// let studentNames = ['boldo', 'dorjo', 'tsetsgee', 'dulmaa'];
// let i = 0 ;

// while ( i < studentNames.length) {
//     if (studentNames [i] [0] === 'd') {
//         console.log((studentNames[i]));

//     }

//     i++;

// }


// let data = ['Засгийн', 'газарт', '6.4', 'сая', 'тонн', 'нүүрс', 'алдагдсан', 'гэх', 'мэдээлэл', 'ирээгүй','байна.', 'Бодит', 'байдалд', 'ийм', 'их', 'хэмжээний', 'нүүрс', 'алдагдсан', 'гэх', 'асуудал','эргэлзээтэй', 'байна.', 'Хууль', 'хяналтын', 'байгууллага', 'хяналт', 'шалгалтын', 'ажил', 'явуулж', 'байна'];

// let nuurs = 0;

// let utga = `нүүрс`

// for( let count = 0; count < data.length; count++){

//     if (utga === data[count]) {

//         nuurs++;
        
//     }
// }
// console.log(nuurs);



// let n = 5
// var Triangle = [];

// for (var i = 0; i < n; i++) {
//     Triangle[i] = new Array(i);

//     for (var j = 0; j < i + 1; j++) {
//         if (j === 0 || j === i) {
//             Triangle[i][j] = 1;
//         } else {
//             Triangle[i][j] = Triangle[i - 1][j - 1] + Triangle[i - 1][j];
//         }
//     }
// }

// console.log(Triangle);


let too = "12341";

console.log(too);

let tsifr = 0;
while( tsifr <= 9 ){
    let count = 0;
    for(let i = 0; i < too.length; i++){

        if(too[i] == tsifr){
            count++;
        }
        
        
    }
    console.log(tsifr + ':' + count);
    tsifr++;

}





// let arr1 = [3, 45, 23, 78, 34];
// let arr2 = [4, 2, 34, 4, 12, 1];

// let arr3 = [];

// for(let i=0; i< arr1.length && i < arr2.length; i++) {

//     arr3 [i] = arr1[i] * arr2[i];

// }

// console.log(arr3);



// let data = ['Засгийн', 'газарт', '6.4', 'сая', 'тонн', 'нүүрс', 'алдагдсан', 'гэх', 'мэдээлэл', 'ирээгүй','байна.', 'Бодит', 'байдалд', 'ийм', 'их', 'хэмжээний', 'нүүрс', 'алдагдсан', 'гэх', 'асуудал','эргэлзээтэй', 'байна.', 'Хууль', 'хяналтын', 'байгууллага', 'хяналт', 'шалгалтын', 'ажил', 'явуулж', 'байна'];

// let nuurs = 0;

// let utga = `нүүрс`

// for( let count = 0; count < data.length; count++){

//     if (utga === data[count]) {

//         nuurs++;
        
//     }
// }
// console.log(nuurs);




// let arr1 = [5,6,4,12,19,121,1,7,9,63];

// let even = 0, odd = 0;

// for(let i = 0; i < arr1.length; i++){

//     if( arr1[i] % 2 ==0 ){

//         even++;

//     }else {

//         odd++;
//     }
// }
// console.log("Even-" ,even);
// console.log("Odd-" ,odd);



















