import '../src/style.css';

const inputBox = document.getElementById('input-box');
const listContainer = document.getElementById('list-container');

function addTask() {
    if (inputBox.value === '') {
        alert("You must write something to add a task!!!");
    } else {
        let li = document.createElement('li');
        li.innerHTML = inputBox.value;

        let span = document.createElement('span');
        span.innerHTML = "\u00d7";
        li.appendChild(span);

        listContainer.appendChild(li);
        inputBox.value = '';
        saveTodo();
    }
}

function saveTodo() {
    localStorage.setItem("data", listContainer.innerHTML);
}

function showTodo() {
    const savedData = localStorage.getItem("data"); 
    if (savedData) {
        listContainer.innerHTML = savedData;
    }
}

window.addTask = addTask;

listContainer.addEventListener('click', function (e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
    } else if (e.target.tagName === 'SPAN') {
        e.target.parentElement.remove();
    }
    saveTodo();
});

showTodo();
