// function sainuu() {

//     console.log(`Hello Pinecone`);

// }
// function say (name) {

//     console.log(`Sainuu ` + name);

// }



// function add (a, b ) {

//     // let c = a+b;

//     // return c ;

//     return a + b ;

// }

// function sub(a, b) {

//     return a-b;

// }

// function mult(a, b) {

//     return a*b;

// }

// function div(a, b) {

//     return a/b;

// }

// sainuu();

// let ner = prompt("Ner oruulna uu.")
// say(ner);

// let c = add(5, 5);
// console.log("C=",c);


// let s = sub (6, 5);
// console.log("S=",s);


// let m = mult(2, 3);
// console.log("M=",m);


// let d = div(10, 2);
// console.log("D=",d);

// function ner() { // Full Name Print 1

//     console.log(`Battamir Enkhtur`);

// }
// ner();



// function name(last, first) { // Last, First name 2

//    return last + " " + first;

// }

// let n = prompt('Ner'), o = prompt('Ovog');

// console.log(n, o);





// function sum (a, b ) {// Sum 3

//     return a + b ;

// }
// let c = sum(5, 5);
// console.log("Sum=",c);


// function area(l, w) { // Area 4

//     return l*w;

// }

// let a = area(5, 3);

// console.log("Area of Rectangle=", a);

// function peri(l, w) { // Perimeter 5

//     return 2*(l+w);

// }

// let p = peri(5, 3);
// console.log("Perimeter of Rectangle=", p);






// Функцууд зохиох


// function max(a, b) { // 1

//     let arr = [a, b];
//     let max = 0;

//     for (let i = 0; i < arr.length; i++) {
//         if (max < arr[i]) {
//             max=arr[i];

//         }


//     }
//     return max;

// }

// let m = max(1, 70);

// console.log(m);


// function inArray(needle, haystack) {
//     var length = haystack.length;
//     for (var i = 0; i < length; i++) {
//     if (haystack[i] == needle)
//      return true;
//     }
//     return false;
//    }



// let n = ['Ivan', 'Florin', 'Liam'];

// const res = n.find(findIvan);

// function findIvan(item) {

//     return item === 'Ivan';
    
// }
// console.log(res);



let arr1 = [ 1, 2, 3, 4, 5, 6, 7];

function find(value, arr) {

    let status = '-1';

    for (let i = 0; i < arr.length; i++) {

        let name = arr[i];

        if (name == value) {

            status = i;

            break;
        }
    }

    return status;
}

console.log(find( 6, arr1));

