// TaskManager class
class TaskManager {
   constructor(currentId="0") {
       this._tasks = [];
       this._currentId = currentId;

   }
   // Method for adding tasks
   addTask(name, description, assignedTo, dueDate, status) {
       const newTask = {
           id: this._currentId++,
           name: name,
           description: description,
           assignedTo: assignedTo,
           dueDate: dueDate,
           status: 'TODO'
       }
       this._tasks.push(newTask);
   }

}


// create TaskManager
const taskManager = new TaskManager();
console.log(taskManager._tasks);