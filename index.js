// Function to add a new task
function addTask() {
    // Get the task input value
    const taskInput = document.getElementById("taskInput").value;

    // Create a new list item
    const newTask = document.createElement("li");
    newTask.innerHTML = `${taskInput} <button id="removeBtn" onclick="removeTask(this)">Remove</button>`;

    // Append new task to the list
    document.getElementById("taskList").appendChild(newTask);

    // Clear the input field
    document.getElementById("taskInput").value = '';
}

// Function to remove a task
function removeTask(element) {
    // Remove the parent list item
    element.parentNode.remove();
}





