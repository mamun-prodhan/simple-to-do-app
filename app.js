const inputBox = document.getElementById('input-box');
const listContiner = document.getElementById('list-container');

function addTask(){
    if(inputBox.value === ''){
        alert("You must write something to add task!!!")
    }
    else{
        let li = document.createElement('li');
        li.innerHTML = inputBox.value;
        listContiner.appendChild(li);
        let span = document.createElement('span');
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
        inputBox.value = '';
        saveTodo()
}

listContiner.addEventListener('click', function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveTodo()
    }
    else if(e.target.tagName === 'SPAN'){
        e.target.parentElement.remove();
        saveTodo()
    }
}, false);

function saveTodo(){
    localStorage.setItem("data", listContiner.innerHTML);
}

function showTodo(){
    listContiner.innerHTML = localStorage.getItem("data");
}

showTodo();