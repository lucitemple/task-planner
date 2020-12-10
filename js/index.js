// Select the New Task Form
const newTaskForm = document.querySelector("#newTaskForm");

// Add event listener for form submission
newTaskForm.addEventListener("submit", (event)  => {
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

  const formErrorMessage = document.querySelector("#errorMessage");

  if (!validFormFieldInput(taskName)) {
      formErrorMessage.innerHTML = "Invalid name. Please correct."
  } else {
      formErrorMessage.getElementsByClassName.display = "none"
  }

});


// Validate data to ensure not empty string or null
const validFormFieldInput = (data) => {
    return (data !== null && data !== '');
}

