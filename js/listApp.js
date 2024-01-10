const taskInput = document.getElementById("task");
const addBtn = document.getElementById("add");
const taskList = document.getElementById("taskList");


// Retrive stored tasks from localStorage
document.addEventListener("DOMContentLoaded", () => {
    const savedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
    savedTasks.forEach(taskText => {
        createTask(taskText);
    });
});

// Button to add a todo
addBtn.addEventListener("click", () => {
    const taskText = taskInput.value.trim();
    if (taskText !== "") {
        createTask(taskText);
        taskInput.value = "";
    }
});

// Creates a new task
function createTask(text) {
    const taskItem = document.createElement("li");
    taskItem.innerHTML = `
        <span>${text}</span>
        <button class="delete">Delete</button>
    `;
    taskList.appendChild(taskItem);
    saveTasksToLocalStorage();

    // Delete task button
    const deleteBtn = taskItem.querySelector(".delete");
    deleteBtn.addEventListener("click", () => {
        taskItem.remove();
        saveTasksToLocalStorage();
    });

    // Marks task as completed
    taskItem.addEventListener("click", () => {
        taskItem.classList.toggle("completed");
        saveTasksToLocalStorage();
    });
}

// My attempt at getting localStorage to work through simplistic means
function saveTasksToLocalStorage() {
    const tasks = Array.from(taskList.children).map(taskItem => {
        return taskItem.querySelector("span").textContent;
    });
    localStorage.setItem("tasks", JSON.stringify(tasks))
}

// console.log(taskList)

// var storedTaskList = localStorage.getItem('taskList', JSON.stringify());

// var stored