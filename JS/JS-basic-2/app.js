let r1 = 20 > 10;

let r2 = 20 < 10;

let r3 = 20 >= 10;

let r4 = 20 <= 10;

let r5 = 10 == 10;

let r6 = 5 != 10;


console.log(r1);

console.log(r2);

console.log(r3);

console.log(r4);

console.log(r5);

console.log(r6);









let weekNumber = 5;
let weekName;

if (weekNumber == 1) {
    weekName = "Davaa";
} else if (weekNumber == 2) {
    weekName = "Mygmar";
} else if (weekNumber == 3) {
    weekName = "Lhagva";
} else if (weekNumber == 4) {
    weekName = "Purev";
} else if (weekNumber == 5) {
    weekName = "Baasan";
} else if (weekNumber == 6) {
    weekName = "Bymba";
} else if (weekNumber == 7) {
    weekName = "Nym";
} else {
    weekName = "Wrong";
}

console.log(weekName);




let gender = "male";
let age = 18;

if (gender === "male" && age >= 18) {

    console.log("Nasand hursen ergtei");
} else {
    console.log("Nasand hureegui esvel huis tohirohgui baina.");
}


let answer, nas;

nas = 20;



// if(nas >= 18){

//     answer = "Nasand hursen";
// }else{
//     answer = "Nasand hureegui";
// }

// console.log(answer);


answer = nas >= 18 ? "Nasand hursen" : "Nasand hureegui";

console.log(answer);



// Huvisagch 1

let t, y, u, i, sum;

sum = 0;
t = 85;
y = 75;
u = 96;
i = 69;

if (t > 80) {

    sum = sum + t;
}

if (y > 80) {
    sum = sum + y;
}

if (u > 80) {

    sum = sum + u;
}

if (i > 80) {

    sum = sum + i;
}

console.log("sum=", sum);


// Huvisagch 2



let a = 3, b = 7, c = 2, d = 4;

let multi = 1;

if (a < 5) {

    multi = multi * a;
}

if (b < 5) {

    multi = multi * b;
}
if (c < 5) {

    multi = multi * c;
}

if (d < 5) {

    multi = multi * d;
}

console.log("multi", multi);



// Easy 1


let n = 59, dun;

if (n <= 100) {

    dun = "A"

}

if (n <= 89) {

    dun = "B"

}
if (n <= 79) {

    dun = "C"

}

if (n <= 69) {

    dun = "D"

}
if (n <= 59) {

    dun = "F"

}

console.log("Dun -", dun)




// Easy 2


// Easy 4

let g = 10, hariu;

if (g < 0) {

    hariu = "Negative"
} else {

    hariu = "Positive"
}

console.log(hariu);


// Easy 5

let weight = 75, height = 170;

let h = weight / (height ** 2) * 10000;

if (h > 30) {

    console.log('Het')


} else if (h > 25) {

    console.log("Iluudel")





} else if (h > 18.5) {

    console.log("Eruul")




} else if (h < 18.5) {
    console.log("Dutagdal")


} else {

    console.log("Wrong answer")
}



// Easy 6


let number = 51;


if (number % 2 == 0) {
    console.log("Even.");
}


else {
    console.log("Odd.");
}


// Easy 7

let too = 1;

if (too < 0) {

    console.log("Negative");
}
else {
    console.log("Positive");
}



// Easy 8


let on = 2001, year = 2022;

let old = year - on;


if (0 < old && old <= 1) {

    console.log("Infant");


} else if (1 < old && old <= 3) {

    console.log("Toddler");


} else if (3 < old && old <= 5) {

    console.log("Preschool");


} else if (5 < old && old <= 12) {

    console.log("Gradeschool");


}
else if (12 < old && old <= 18) {

    console.log("Teen");


} else if (18 < old && old <= 21) {

    console.log("Young adult");


} else if (21 <= old) {

    console.log("Adult");


} else {

    console.log("Wrong answer");
}


// Suragchiid Dun





// Leap Year 


let years=2000;


if ((0 == years % 4) && (0 != years % 100) || (0 == years % 400)) {
    console.log(years + ' Leap year mun');
} else {
    console.log(years + ' Leap year bish');
}


// 4 tooni baga


let q = 120; 
let w = 30;
let e =20;
let r = 100;



if( q<w && q<e && q<r){

    console.log("Hamgiin Baga too n" , q);
}else if (w<q && w<e && w<r){

    console.log("Hamgiin Baga too n" , w);

}else if (e<q && e<w && e<r){

    console.log("Hamgiin Baga too n" , e);

}else if (r<q && r<e && r<w){

    console.log("Hamgiin Baga too n" , r);

}


// Өгөгдсөн тоонуудын хамгийн их болон хамгийн багыг олно уу


let j=50;
let k=100;
let l=150;


if( j<k && j<l){

    console.log("3 toonii hamgiin baga n" , j);
} else if (k<j && k<l){

    console.log("3 toonii hamgiin baga n", k);
} else if (l<j && l<k){

    console.log("3 toonii hamgiin baga n", l);
}

if( j>k && j>l){

    console.log("3 toonii hamgiin ih n" , j);
} else if (k>j && k>l){

    console.log("3 toonii hamgiin ih n", k);
} else if (l>j && l>k){

    console.log("3 toonii hamgiin ih n", l);
}






























