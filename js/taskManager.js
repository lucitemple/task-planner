//  Function, createTaskHtml
const createTaskHtml = (
  id,
  taskName,
  taskDescription,
  assignTo,
  dueDate,
  status
) =>
  //cardTemplate.innerHTML=

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
        status === "TODO" ? "visible" : "invisible"
      }">Done</button>
            <button type="button" class="btn btn-danger delete-button ">Delete</button>

            <button type="button" class="btn btn-primary">Edit</button>
          </div>
        </div>
      </div>`;

// TaskManager class
class TaskManager {
  constructor(currentId = "0") {
    this._tasks = [];
    this._currentId = currentId;
  }
  // Method for adding tasks
  addTask(taskName, taskDescription, assignedTo, dueDate) {
    const newTask = {
      id: this._currentId++,
      taskName: taskName,
      taskDescription: taskDescription,
      assignedTo: assignedTo,
      dueDate: dueDate,
      status: "TODO",
    };
    this._tasks.push(newTask);
    // T8. call taskManager.save() to save task to localStorage
    //taskManager.save();
  }
  //  deleteTask method on the TaskManager class. It should take one parameter, taskId, the id of the task we want deleted.
  deleteTask(taskId) {
    //n the deleteTask method, create an empty array and store it in a new variable, newTasks
    const newTasks = [];
    {
      //Get the current task in the loop, store it in a variable, task.
      for (let i = 0; i < this._tasks.length; i++) {
        let task = this._tasks[i];
        alert(task.id + "== " + taskId);
        //Check if task.id is not equal to the taskId passed as a parameter.
        if (task.id !== taskId) {
          //If the task.id is not equal to the taskId, push the task into the newTasks array.
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
  // Create render method
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

  // T8. Save method to save current this.tasks to localStorage
  save() {
    let tasksJson = JSON.stringify(this._tasks); // create JSON string of tasks
    // Store the JSON string in localStorage under the key tasks using localStorage.setItem()
    localStorage.setItem("tasks", tasksJson);
    // Convert the this.currentId to a string and store it in a new variable, currentId.
    let currentId = String(this._currentId);
    // Store the currentId variable in localStorage under the key currentId using localStorage.setItem().
    localStorage.setItem("currentId", currentId); // or does currentId need to be stringified?
  }

  /*   //In js/taskManager.js, add a new method called load. This method doesn't require any parameters.
  load() {
    //check if any tasks are saved in localStorage with localStorage.getItem().
    if (localStorage.getItem("tasks") !== null) {
      // get the JSON string of tasks stored in localStorage with localStorage.getItem(), making sure to pass the key we used to save the tasks, tasks. Store this string into a new variable, tasksJson.
      let tasksJson = JSON.stringify(localStorage.getItem("tasks"));
      // Check if the currentId is saved in localStorage with localStorage.getItem().
      if (localStorage.getItem("this._currentId") !== null) {
        let currentId = localStorage.getItem("this._currentId"); //get the currentId in localStorage using localStorage.getItem() and store it in a new variable, currentId.
        this._currentId = parseInt("currentId"); //Convert the currentId to a number before storing it to the TaskManager's this.currentId
        console.log("testing load method");
      };
    };
  } */
  load() {
    if (localStorage.getItem("tasks")) {
      const tasksJson = localStorage.getItem("tasks");
      this._tasks = JSON.parse(tasksJson);
    }
    if (localStorage.getItem("currentId")) {
      const currentId = localStorage.getItem("currentId"); //get the currentId in localStorage using localStorage.getItem() and store it in a new variable, currentId.
      this._currentId = Number(currentId); //Convert the currentId to a number before storing it to the TaskManager's this.currentId
      console.log("testing load method");
    }
  }
}



// Module exports
module.exports = TaskManager;
