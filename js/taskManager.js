// Function for turning the task data into HTML
const createTaskHtml = (
  id,
  taskName,
  taskDescription,
  assignTo,
  dueDate,
  status
) =>
  // How task input will be displayed in cardTemplate.innerHTML=
  `<div class="card shadow p-2 mb-4 bg-white m-2" style="width: 18rem" data-task-id=${id}>
          <div class="card-body" >
            <h5 class="card-title">${taskName}</h5>
            <p class="card-text">
              ${taskDescription}
            </p>
          </div>
          <ul class="list-group list-group-flush">
            <li class="assigned-to-label list-group-item">
             Assigned to:
              <span class="assignee">${assignTo}</span>
            </li>
            <li class="list-group-item due-date-label">
              Due date:
              <span class="due-date">${dueDate}</span>
            </li>
            <li class="list-group-item status-label">
              Status:
              <span class="status">${status}</span>
            </li>
          </ul>
       <div class="card-body">
     
      <button class="btn btn-success done-button ${
        status === "DONE" ? "invisible" : "visible"
      }">Done</button>
            <button type="button" class="btn btn-danger delete-button ">Delete</button>

            <button type="button" class="btn btn-primary edit-button" data-toggle="modal" data-target="#createTaskModal"id="editTaskButton">Edit</button>
          </div>
        </div>
      </div>`;

// TaskManager class to manage tasks
class TaskManager {
  constructor(currentId = "0") {
    this._tasks = [];
    this._currentId = currentId;
  }
  // Method to add a task to task manager
  addTask(taskName, taskDescription, assignedTo, dueDate, status = "TO DO") {
    const newTask = {
      id: this._currentId++,
      taskName: taskName,
      taskDescription: taskDescription,
      assignedTo: assignedTo,
      dueDate: dueDate,
      status: status,
    };
    this._tasks.push(newTask);
  }

  // Edit method saves edits to task
  editTask(editedTask, taskName, taskDescription, assignedTo, dueDate, status) {
    editedTask.taskName = taskName;
    editedTask.taskDescription = taskDescription;
    editedTask.assignedTo = assignedTo;
    editedTask.dueDate = dueDate;
    editedTask.status = status;
  }

  // Method to delete tasks from task manager
  deleteTask(taskId) {
    const newTasks = [];
    {
      // Get the current task in the loop, store it in a variable, task.
      for (let i = 0; i < this._tasks.length; i++) {
        let task = this._tasks[i];
        // Check if task.id is not equal to the taskId passed as a parameter.
        if (task.id !== taskId) {
          // If the task.id is not equal to the taskId, push the task into the newTasks array.
          newTasks.push(task);
        }
      }
      //Set this.tasks to newTasks
      this._tasks = newTasks;
    }
  }
  // Create method to get task by id
  getTaskById(taskId) {
    let foundTask;

    for (let i = 0; i < this._tasks.length; i++) {
      const task = this._tasks[i];
      if (taskId === task.id) {
        foundTask = task;
      }
    }
    return foundTask;
  }

  // Create render method to display tasks on website
  render() {
    // Creating variable to store task html
    const tasksHtmlList = [];

    // Loop over tasks to create html & store in array
    for (let i = 0; i < this._tasks.length; i++) {
      // Store the current task in a variable
      const newTask = this._tasks[i];

      // Create date variable to store formatted date
      const date = new Date(newTask.dueDate);
      let day = date.getDate();
      let month = date.getMonth() + 1;
      let year = date.getFullYear();
      let formattedDate = `${day}/${month}/${year}`;

      // Create variable to store the html of current task
      const taskHtml = createTaskHtml(
        newTask.id,
        newTask.taskName,
        newTask.taskDescription,
        newTask.assignedTo,
        formattedDate,
        newTask.status
      );
      tasksHtmlList.push(taskHtml);
    }
    // Create a variable to join task to html string
    const tasksHtml = tasksHtmlList.join("\n");
    cardContainer.innerHTML = tasksHtml; //cardTemplate
  }

  // Method to save tasks to localStorage
  save() {
    let tasksJson = JSON.stringify(this._tasks); // create JSON string of tasks
    // Store the JSON string in localStorage
    localStorage.setItem("tasks", tasksJson);
    // Convert this._currentId to a string
    let currentId = String(this._currentId);
    // Store the currentId variable in localStorage.
    localStorage.setItem("currentId", currentId);
  }
  // Method to load saved tasks from localStorage
  load() {
    if (localStorage.getItem("tasks")) {
      const tasksJson = localStorage.getItem("tasks");
      this._tasks = JSON.parse(tasksJson);
    }
    if (localStorage.getItem("currentId")) {
      const currentId = localStorage.getItem("currentId"); //get the currentId in localStorage
      this._currentId = Number(currentId); //Convert currentId to a number and store in the TaskManager's this._currentId
    }
  }
}

// Module exports
if (typeof module != "undefined") {
  module.exports = TaskManager;
}
