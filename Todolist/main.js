//Function to add a new task
function addTask() {
    const taskInput = document.getElementById('new-task');
    const taskText = taskInput.value.trim();

    // Check if the input is not empty
    if (taskText !== '') {
        //Create a new list item
        const li = document.createElement('li');

        //Add the new task text
        li.textContent = taskText;

        //Create a delete button
        const deleteBtn = createDeleteButton();

        //Append the delete button to the list item
        li.appendChild(deleteBtn);

        //Add the list item to the task list
        const taskList = document.getElementById('task-list');
        taskList.appendChild(li);

        //Clear the input field
        taskInput.value = '';
    }
}

//Function to create a Delete button
function createDeleteButton() {
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.className = 'delete-btn';
    deleteBtn.onclick = function() {
        deleteTask(this);
    };
    return deleteBtn;
}

//Function to delete a task
function deleteTask(deleteBtn) {
    const taskList = document.getElementById('task-list');
    const taskItem = deleteBtn.parentElement;
    taskList.removeChild(taskItem);
}