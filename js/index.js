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

  // validate date, error message
/* const dateFld = document.getElementById("newTaskDueDate");
const todayDate= new Date();
const dateValue = dateFld.value.trim() ? new Date(dateFld.value) : null;
if (dateFld.value==null || dateValue < todayDate {
  formErrorMessage.innerHTML = "Invalid date. Please correct.";
    formErrorMessage.style.display = "block";
    formErrorMessage.style.color = "text-danger";
  } else {
    formErrorMessage.style.display = "none";
  }; */

  //const formErrorMessage = document.querySelector("#formErrorMessage");

  // If invalid data, error message.
  if (!validFormFieldInput(taskName)) {
    formErrorMessage.innerHTML = "Invalid task name. Please correct.";
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

// Validate date
/* $(function () {
  $(".datepicker").datepicker({
    minDate: new Date(),
  });
}); */

//Validate date
$(function () {
  let maxDate = validateDate();
  $("#newTaskDueDate").attr("min", maxDate);
  document.querySelector("#newTaskDueDate").focus();
});

function validateDate() {
  var today = new Date();
  var dateToday = today.getDate();
  var monthToday = today.getMonth() + 1;
  var yearToday = today.getFullYear();
  return yearToday + "-" + monthToday + "-" + dateToday;
}
