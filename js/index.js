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

// Select the title of the task modal so can switch between add & edit modes
const taskModalTitle = document.querySelector("#createTaskModalLabel");

// Store taskform mode - add OR edit
let taskFormMode;

// Empty variable to store edited task temporarily
let editedTask;

// Event listener for add task button
const createTaskButton = document.querySelector("#createTaskButton");
createTaskButton.addEventListener("click", () => {
  taskFormMode = "add";
  taskModalTitle.innerHTML = "Create Task";
});

// Select New Task form inputs
const newTaskNameInput = document.querySelector("#newTaskNameInput");
const newTaskAssignedTo = document.querySelector("#newTaskAssignedTo");
const newTaskDescription = document.querySelector("#newTaskDescription");
const newTaskStatus = document.querySelector("#newTaskStatus");
const formErrorMessage = document.querySelector("#formErrorMessage");

// Select task modal window
let taskModal = document.getElementById("createTaskModal");

// Add event listener for form submission
newTaskForm.addEventListener("submit", (event) => {
  // Prevent page from refreshing while form being used
  event.preventDefault();

  // Store values of form inputs
  const taskName = newTaskNameInput.value;
  const assignedTo = newTaskAssignedTo.value;
  const taskDescription = newTaskDescription.value;
  const status = newTaskStatus.value;
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
    if (taskFormMode === "add") {
      taskManager.addTask(
        taskName,
        taskDescription,
        assignedTo,
        dueDate,
        status
      );
    }

    if (taskFormMode === "edit") {
      taskManager.editTask(
        editedTask,
        taskName,
        taskDescription,
        assignedTo,
        dueDate,
        status
      );
      // Switch task form mode to 'add'
      taskFormMode = "add";
      // Switch title of the modal
      taskModalTitle.innerHTML = "Create Task";
      // Close modal when save button clicked
      $("#createTaskModal").modal("toggle");
    }

    // Call taskManager.save() to save task to localStorage
    taskManager.save();

    // Call taskManager render method to push tasks to html
    taskManager.render();

    // Reset form
    newTaskForm.reset();
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

// EventListener for task buttons: done / edit /delete
cardContainer.addEventListener("click", (event) => {
  const parentTask = event.target.parentElement.parentElement;
  const taskId = Number(parentTask.dataset.taskId);

  // Mark task status "done" when done-button clicked
  if (event.target.classList.contains("done-button")) {
    const task = taskManager.getTaskById(taskId);
    task.status = "DONE";
  }
  // Open edit mode when edit-button clicked
  if (event.target.classList.contains("edit-button")) {
    // Switch task form mode to 'edit'
    taskFormMode = "edit";
    // Switch title of the modal to "edit"
    taskModalTitle.innerHTML = "Edit Task";

    editedTask = taskManager.getTaskById(taskId);

    // Fill task form fields with stored values
    newTaskNameInput.value = editedTask.taskName;
    newTaskDescription.value = editedTask.taskDescription;
    newTaskAssignedTo.value = editedTask.assignedTo;
    newTaskDueDate.value = editedTask.dueDate;
    newTaskStatus.value = editedTask.status;
  }

  // Delete task when delete-button clicked
  if (event.target.classList.contains("delete-button")) {
    taskManager.deleteTask(taskId);
  }

  // Save and render changes
  taskManager.save();
  taskManager.render();
});
