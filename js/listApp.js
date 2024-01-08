const taskInput = document.getElementById("task");
const addBtn = document.getElementById("add");
const taskList = document.getElementById("taskList");

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

    // Delete task button
    const deleteBtn = taskItem.querySelector(".delete");
    deleteBtn.addEventListener("click", () => {
        taskItem.remove();
    });

    // Marks task as completed
    taskItem.addEventListener("click", () => {
        taskItem.classList.toggle("completed");
    });
}