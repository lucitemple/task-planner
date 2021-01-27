// Instantiate new instance of TaskManager
const taskManager = new TaskManager();

// Load any tasks from local storage
taskManager.load();

// Select the card-container in which tasks will be displayed
// NB. MUST be declared BEFORE the render() method is used.
const cardContainer = document.querySelector("#card-container");

// Display tasks on website
taskManager.render();

// Select the task form for inputting new tasks
const newTaskForm = document.querySelector("#newTaskForm");

// Select date field in form
const newTaskDueDate = document.querySelector("#newTaskDueDate");

// Add event listener for form submission
newTaskForm.addEventListener("submit", (event) => {
  // Prevent page from refreshing while form being used
  event.preventDefault();

  // Select New Task form inputs
  const newTaskNameInput = document.querySelector("#newTaskNameInput");
  const newTaskAssignedTo = document.querySelector("#newTaskAssignedTo");
  const newTaskDescription = document.querySelector("#newTaskDescription");
  const newTaskStatus = document.querySelector("#newTaskStatus");
  const formErrorMessage = document.querySelector("#formErrorMessage");

  // Store values of form inputs
  const taskName = newTaskNameInput.value;
  const assignedTo = newTaskAssignedTo.value;
  const taskDescription = newTaskDescription.value;
  const taskStatus = newTaskStatus.value;
  const dueDate = newTaskDueDate.value;

  // Display error message for invalid inputs.
  if (!validFormFieldInput(taskName)) {
    errorMessage("task name");
  } else if (!validFormFieldInput(assignedTo)) {
     errorMessage("assignee");
    //getFocus(newTaskAssignedTo);
  } else if (!validFormFieldInput(taskDescription)) {
     errorMessage("description");
  } else if (!validFormFieldInput(dueDate)) {
     errorMessage("date");
  } else {
    formErrorMessage.style.display = "none";

    // Send validated values to TaskManager
    taskManager.addTask(taskName, taskDescription, assignedTo, dueDate);

    // Call taskManager render method to push tasks to html
    taskManager.render();

    // Call taskManager.save() to save task to localStorage
    taskManager.save();

    // Reset form
    document.querySelector("#newTaskForm").reset();
  }
});

// Error message
function errorMessage(input) {
      formErrorMessage.innerHTML = `Invalid ${input}. Please correct.`;
      formErrorMessage.style.display = "block";
      formErrorMessage.style.color = "text-danger";
}

// Validate data to ensure not empty string or null
function validFormFieldInput(data) {
  return data !== null && data !== "";
}

// Limit task due date to future dates only, run on click.
newTaskDueDate.addEventListener("click", function () {
  let today = new Date();
  let dateToday = String(today.getDate()).padStart(2, "0");
  let monthToday = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
  let yearToday = today.getFullYear();
  let minDate = `${yearToday}-${monthToday}-${dateToday}`;
  newTaskDueDate.min = minDate;
});

// Mark task status "done" when done-button clicked
cardContainer.addEventListener("click", (event) => {
  if (event.target.classList.contains("done-button")) {
    const parentTask = event.target.parentElement.parentElement;
    const taskId = Number(parentTask.dataset.taskId);
    const task = taskManager.getTaskById(taskId);
    task.status = "DONE";
    taskManager.save();
    taskManager.render();
  }

  // Delete task when delete-button clicked
  if (event.target.classList.contains("delete-button")) {
    const parentTask = event.target.parentElement.parentElement;
    const taskId = Number(parentTask.dataset.taskId);
    taskManager.deleteTask(taskId);
    taskManager.save();
    taskManager.render();
  }
});
