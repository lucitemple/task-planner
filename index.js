// Select the New Task Form
const newTaskForm = document.querySelector("#newTaskForm");

const newTaskNameInput = document.querySelector("#newTaskNameInput");
const newTaskAssignedTo = document.querySelector("#newTaskAssignedTo");
const newTaskDescription = document.querySelector("#newTaskDescription");
const newTaskStatus = document.querySelector("#newTaskStatus");
const newTaskDueDate = document.querySelector("#newTaskDueDate");


const validFormFieldInput = (data) => {
    return (data !== null && data !== '');
}

