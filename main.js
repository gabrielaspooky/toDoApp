const newDiv = document.createElement("div"); 

newDiv.setAttribute("id", "myNewDiv"); 

document.body.appendChild(newDiv); 


//
const newTitle = document.createElement("h1"); 

newTitle.setAttribute("id", "toDoTitle"); 

newDiv.appendChild(newTitle); 

newTitle.innerHTML = "To-do app";

//

const newInput = document.createElement("input"); 

newInput.setAttribute("id", "myNewInput"); 

document.body.appendChild(newInput); 

//

const buttonContainer = document.createElement("div"); 

buttonContainer.setAttribute("id", "addClearButtons"); 

document.body.appendChild(buttonContainer); 


//


const addNewTaskButton = document.createElement("button"); 

addNewTaskButton.setAttribute("id", "addButton"); 

buttonContainer.appendChild(addNewTaskButton); 

addNewTaskButton.innerHTML = "Add";


//

const clearButton = document.createElement("button"); 

clearButton.setAttribute("id", "clearTaskButton"); 

buttonContainer.appendChild(clearButton); 

clearButton.innerHTML = "Clear";

//

const taskContainer = document.createElement("div"); 

taskContainer.setAttribute("id", "myTaskContainer"); 

buttonContainer.appendChild(taskContainer); 

//

addNewTaskButton.addEventListener("click", function() {
    const taskText = newInput.value;
    if (taskText === "") {
        alert("Por favor, añade una tarea");
        return;
    }

    const newTask = document.createElement("p");
    newTask.innerText = taskText;
    taskContainer.appendChild(newTask);

    newInput.value = ""; 
});

clearButton.addEventListener("click", function() {
    taskContainer.innerHTML = ""; 
});
