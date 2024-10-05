// Get elements from the DOM
const taskInput = document.getElementById('taskInput');
const addTaskButton = document.getElementById('addTaskButton');
const taskList = document.getElementById('taskList');

// Add an event listener to the button
addTaskButton.addEventListener('click', function() {
    const taskText = taskInput.value.trim(); // Get the input value

    // Check if the input is not empty
    if (taskText) {
        const listItem = document.createElement('li'); // Create a new list item
        listItem.textContent = taskText; // Set the text of the list item

        const deleteButton = document.createElement('button'); // Create a delete button
        deleteButton.textContent = 'Delete'; // Set button text
        deleteButton.onclick = function() {
            taskList.removeChild(listItem); // Remove the list item when clicked
        };

        listItem.appendChild(deleteButton); // Append the delete button to the list item
        taskList.appendChild(listItem); // Append the list item to the task list
        taskInput.value = ''; // Clear the input field
    } else {
        alert('Please enter a task.'); // Alert if input is empty
    }
});