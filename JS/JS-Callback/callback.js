let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function filter(numbers, callback) {

    let result = [];

    for (let i = 0; i < numbers.length; i++) {

        if (callback(numbers[i])) {
            result.push(numbers[i]);
            
        }
        
    }
    return result;
    
}
const evens = filter(numbers, (n)=>{return n%2===0})
const odds = filter(numbers, (n)=>{return n%2!==0})
const oddsby3 = filter(numbers, (n)=>{return n%3===0})
console.log(evens);
console.log(odds);
console.log(oddsby3);

