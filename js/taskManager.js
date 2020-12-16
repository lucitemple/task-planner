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