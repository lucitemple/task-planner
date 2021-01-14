//const cardTemplate = document.querySelector("#cardTemplate");
const cardContainer = document.querySelector("#card-container");

// Instantiate new instance of TaskManager
const taskManager = new TaskManager();

// call load & render methods
taskManager.load();
taskManager.render();

// Select the New Task Form
const newTaskForm = document.querySelector("#newTaskForm");
// Select date
const newTaskDueDate = document.querySelector("#newTaskDueDate");

// Add event listener for form submission
newTaskForm.addEventListener("submit", (event) => {
  // Prevent page from refreshing
  event.preventDefault();

  // Select New Task Form inputs, and store values.
  const newTaskNameInput = document.querySelector("#newTaskNameInput");
  const taskName = newTaskNameInput.value;

  const newTaskAssignedTo = document.querySelector("#newTaskAssignedTo");
  const assignedTo = newTaskAssignedTo.value;

  const newTaskDescription = document.querySelector("#newTaskDescription");
  const taskDescription = newTaskDescription.value;

  const newTaskStatus = document.querySelector("#newTaskStatus");
  const taskStatus = newTaskStatus.value;

  //const newTaskDueDate = document.querySelector("#newTaskDueDate");
  const dueDate = newTaskDueDate.value;

  const formErrorMessage = document.querySelector("#formErrorMessage");

  // If invalid data, error message.
  if (!validFormFieldInput(taskName)) {
    formErrorMessage.innerHTML = "Invalid task name. Please correct.";
    formErrorMessage.style.display = "block";
    formErrorMessage.style.color = "text-danger";
  } else if (!validFormFieldInput(assignedTo)) {
    formErrorMessage.innerHTML = "Please assign task.";
    formErrorMessage.style.display = "block";
    formErrorMessage.style.color = "text-danger";
    getFocus(newTaskAssignedTo);
  } else if (!validFormFieldInput(taskDescription)) {
    formErrorMessage.innerHTML = "Please input description.";
    formErrorMessage.style.display = "block";
    formErrorMessage.style.color = "text-danger";
  } else if (!validFormFieldInput(dueDate)) {
    formErrorMessage.innerHTML = "Please assign due date.";
    formErrorMessage.style.display = "block";
    formErrorMessage.style.color = "text-danger";
  } else {
    formErrorMessage.style.display = "none";
    // send validated values to TaskManager
    taskManager.addTask(taskName, taskDescription, assignedTo, dueDate);

  
    // Call taskManager render method to push tasks to html
    taskManager.render();
    // Call taskManager.save() to save task to localStorage
    taskManager.save();

    // reset form
    document.querySelector("#newTaskForm").reset();
  }
  // Clear form
/*    newTaskNameInput.value = "";
   newTaskDescription.value = "";
   newTaskAssignedTo.value = "";
   newTaskDueDate.value = ""; */
});

// Validate data to ensure not empty string or null
function validFormFieldInput(data) {
  return data !== null && data !== "";
}

// Calendar: future dates only, run on click
newTaskDueDate.addEventListener("click", function () {
  let today = new Date();
  let minsToday = today.getMinutes();
  let hourToday = today.getHours();
  let dateToday = today.getDate();
  let monthToday = today.getMonth() + 1;
  let yearToday = today.getFullYear();
  let minDate = `${yearToday}-${monthToday}-${dateToday}T${hourToday}:${minsToday}`;
  newTaskDueDate.min = minDate;
  //`alert("minDate " + minDate);
});

/* function getFocus(inputID) {
  document.getElementById(inputID).focus();
}; */

//const cardTemplate = document.querySelector("#cardTemplate");
//const  = document.querySelector("#cardTemplate");

 // When done button clicked mark task done
cardContainer.addEventListener("click", (event) => {
  if (event.target.classList.contains("done-button")) {
    const parentTask = event.target.parentElement.parentElement;
    const taskId = Number(parentTask.dataset.taskId);
    const task = taskManager.getTaskById(taskId);
    task.status = "DONE";
    taskManager.save();
    taskManager.render();
  }
  // Task deleted when delete-button clicked
if(event.target.classList.contains("delete-button"))
{
  const parentTask = event.target.parentElement.parentElement;
  const taskId = Number(parentTask.dataset.taskId);
  taskManager.deleteTask(taskId);
  taskManager.save();
  taskManager.render();
  
}
} )


