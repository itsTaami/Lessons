// document.getElementById("text").innerHTML = "Hello changed";

// document.getElementsByClassName("dummy")[0].innerHTML = "Dummy changed";

// document.getElementById("date").innerHTML = "Date : " + Date();

// document.getElementsByTagName("img")[0].src = "https://images.pexels.com/photos/5759488/pexels-photo-5759488.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"

// document.querySelectorAll('.profileName')[0].style.color = "red";
// document.querySelectorAll('.profileName')[0].style.fontSize = "40px";


// const newDiv = document.createElement ('h1');
// const newContent = document.createTextNode("blablabla");
// newDiv.appendChild(newContent);
// const main = document.getElementsByTagName("main");
// main[0].appendChild(newDiv);

// const myBtn = document.getElementsById("myBtn");

// console.log(myBtn);

// // let change = () => {

   
// // }

// myBtn.addEventListener("click", ()=>{
//     main.style = 'background-color: green';

// });

const colors = ["red", "green", "blue"];

let colorIndex = 0;

const divs = document.getElementsByClassName("box");

let change = () =>{

    for (let i = 0; i < divs.length; i++) {

        let color = getColor();
        divs[i].style.backgroundColor = color;
        divs[i].textContent = color;
        
    }

};

const getColor = () =>{

    let red = Math.floor(Math.random() * 256).toString(16);
    let green = Math.floor(Math.random() * 256).toString(16);
    let blue = Math.floor(Math.random() * 256).toString(16);
    return `#${red}${green}${blue}`;

}

myBtn.addEventListener('click',change);