
const addBtn = document.getElementById("add");
const taskList = document.getElementById("tasks");
const inputText = document.getElementById("to-do-input");

let todayDate = new Date().toISOString().slice(0, 10);
// console.log(todayDate);

document.getElementById("date").innerHTML = "On sar Udur:" + todayDate;

const allTask = [
    { name: JS, status: false, priority: "High"},
    { name: HTML, status: false, priority: "High"},]

const cardItem = (text) => {
    const item = `
                <div class="task">
                    <input type="text ${done}" class="text" readonly value="${allTask[inputText.name]}" />
                    <div class="actions">
                        <button class="edit" onclick="edit(this)"><i class="fas fa-pen"></i></button>
                        <button class="done" onclick="done(this)"><i class="fas fa-check"></i></button>
                        <button class="delete" onclick="ustgah(this)"><i class="fas fa-trash"></i></button>
                    </div>
                </div>`;
    return item;
};

let count = 0;

const taskAdd = () => {
    let text = inputText.value;
    if (text === "") {
        alert("Ta utga oruulaagui baina");
    } else {

        taskList.innerHTML += cardItem(text);
    }

    taskLeft = document.getElementById('taskleft');

    count ++;

    taskLeft.innerHTML = `${count} - Tasks left `; 

   


};

addBtn.addEventListener("click", taskAdd);
document.addEventListener('keyup', (e) => {
    if (e.key === "Enter") {
        taskAdd();
    }
});

const ustgah = (e) => {

    const parent = e.parentNode.parentNode.parentNode;
    console.log(parent);

    const child = e.parentNode.parentNode;

    console.log(child);

    parent.removeChild(child);

    taskLeft = document.getElementById('taskleft');

    count --;

    taskLeft.innerHTML = `${count} - Tasks left `; 



};

const done = (e) => {

    const input = e.parentNode.parentNode.children[0];

    input.style.textDecoration = "line-through";
    input.style.backgroundColor = "green";


    console.log(e.parentNode.parentNode.children[0]);

};

const edit = (e) => {

    const input = e.parentNode.parentNode.children[0];  // input selecting

    input.setAttribute('value', input.value);  //changing input value

    let icon = e.children[0];

    // icon oo avav
    if (input.hasAttribute("readonly")) {
        input.removeAttribute("readonly");
    } else {
        input.setAttribute("readonly", true);
    }

    if (icon.classList.contains("fa-pen")) {

        icon.classList.remove("fa-pen");

        icon.classList.add("fa-floppy-disk");



    } else {

        icon.classList.add("fa-pen");



        icon.classList.remove("fa-floppy-disk");

    }

};

