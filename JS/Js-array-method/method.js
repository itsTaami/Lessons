




function brands(a) {

    return a;



}

let carBrands = brands ([
    ["Aston Martin Lagonda Ltd", "UK", 2016],
    ["Audi", "Germany", 2016],
    ["BMW", "Germany", 2016],
    ["Chevrolet", "USA", 2016],
    ["Dodge", "USA", 2016],
    ["Ferrari", "Italy", 2016],
    ["Honda", "Japan", 2016],
    ["Jaguar", "UK", 2016],
    ["Lamborghini", "Italy", 2016],
]);

for (let i = 0; i < carBrands.length; i++) {

    let x = carBrands[i][0].split('').at(0);

    if (x.toLowerCase() === "a") {

        console.log('brand:' + carBrands[i][0]);
        console.log('country:' + carBrands[i][1]);
        console.log('year:' + carBrands[i][2]);

    }
 
}


console.log("==========2==========");


for (let i = 0; i < carBrands.length; i++) {

    let x = carBrands[i][1];

    if ( x.toUpperCase() === "USA") {
        console.log(carBrands[i][0] + ", " + carBrands [i][1] + ", " + carBrands[i][2]);
        
    }
    
    
}

console.log(carBrands);


// function brands(a) {

//     for (let index = 0; index < array.length; index++) {
        
        
//     }
    
// }