// Instantiate new instance of TaskManager
const taskManager = new TaskManager();

taskManager.addTask('Clean kitchen', 'Tidy, sweep & mop floors', 'Ben', '2020-12-20');
console.log(taskManager._tasks);

// Select the New Task Form
const newTaskForm = document.querySelector("#newTaskForm");

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

  const newTaskDueDate = document.querySelector("#newTaskDueDate");
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
  }
});

// Validate data to ensure not empty string or null
function validFormFieldInput(data) {
  return data !== null && data !== "";
}

// Calendar: future dates only, run on click
newTaskDueDate.addEventListener("click", function () {
  let today = new Date();
  let dateToday = today.getDate();
  let monthToday = today.getMonth() + 1;
  let yearToday = today.getFullYear();
  let minDate = yearToday + "-" + monthToday + "-" + dateToday;
  newTaskDueDate.min = minDate;
});

function getFocus(inputID) {
  document.getElementById(inputID).focus();
};
