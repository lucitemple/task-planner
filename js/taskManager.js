//  Function, createTaskHtml
const createTaskHtml=(name,description,assignTo,dueDate,status)=>
cardTemplate.innerHTML=
 
        ` <div class="d-flex flex-wrap justify-content-center" id="card-container">
        <!-- https://getbootstrap.com/docs/4.0/components/card/ -->
        <div class="card shadow p-2 mb-4 bg-white m-2" style="width: 18rem">
          <div class="card-body">
            <h5 class="card-title">${name}</h5>
            <p class="card-text">
              ${description}
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
            <!-- Buttons -->
            <button type="button" class="btn btn-danger">Delete</button>
            <button type="button" class="btn btn-success">Edit</button>
          </div>
        </div>
      </div>`


// TaskManager class
class TaskManager {
  constructor(currentId = "0") {
    this._tasks = [];
    this._currentId = currentId;
  }
  // Method for adding tasks
  addTask(taskName, assignedTo, taskDescription, dueDate) {
    const newTask = {
      id: this._currentId++,
      taskName: taskName,
      assignedTo: assignedTo,
      taskDescription: taskDescription,
      dueDate: dueDate,
      status: "TODO",
    };
    this._tasks.push(newTask);
  }
}

const cardTemplate = document.querySelector("#cardTemplate");
