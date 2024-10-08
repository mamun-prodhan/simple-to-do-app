import '../src/style.css';

const inputBox = document.getElementById('input-box');
const listContainer = document.getElementById('list-container');

function addTask() {
    if (inputBox.value === '') {
        alert("You must write something to add a task!!!");
    } else {
        let li = document.createElement('li');
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement('span');
        span.innerHTML = "\u00d7"; 
        li.appendChild(span);
    }
    inputBox.value = ''; 
    saveTodo();
}

// Attach addTask to the global window object so it can be used in HTML
window.addTask = addTask;

function saveTodo() {
    localStorage.setItem("data", listContainer.innerHTML);
}

function showTodo() {
    listContainer.innerHTML = localStorage.getItem("data");
}

showTodo();
