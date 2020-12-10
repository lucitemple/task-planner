// Select the New Task Form
const newTaskForm = document.querySelector("#newTaskForm");

// Select New Task Form inputs, and store values.
const newTaskNameInput = document.querySelector("#newTaskNameInput");
const taskName = newTaskNameInput.value;

const newTaskAssignedTo = document.querySelector("#newTaskAssignedTo");
const assignedTo = newTaskAssignedTo.value;

const newTaskDescription = document.querySelector("#newTaskDescription");
const taskDescription = newTaskDescription.value;

const newTaskStatus = document.querySelector("#newTaskStatus");
const taskStatus = newTaskStatus.value;

const newTaskDueDate = document.querySelector("#newTaskDueDate");
const dueDate = newTaskDueDate.value;


// Validate data to ensure not empty string or null
const validFormFieldInput = (data) => {
    return (data !== null && data !== '');
}

