const colors = ["red", "blue", "green"];
const btnclr = ["orange", "white", "yellow"];
let colorIndex = 0;

const body = document.getElementsByTagName("body")[0];

let change = () =>{

    if(colorIndex >= 3){

        colorIndex = 0;
    }

    myBtn.style = `background-color: ${btnclr[colorIndex]}`;

    body.style = `background-color: ${colors[colorIndex]}`;
    colorIndex++;
}
myBtn.addEventListener("click", change);

// const btnclr = ["white","Orange","Yellow"];
// let i = 0;

// let myBtn = document.getElementById("myBtn");

// let change1 = () => {

//     if(i >= 3){

//         i = 0; 
//     }
//     myBtn.style.backgroundColor = btnclr[i];

//     i++;

// }
// myBtn.addEventListener("click",change1);

