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



// Instantiate new instance of TaskManager
/* const taskManager = new TaskManager();

taskManager.addTask('Clean kitchen', 'Tidy, sweep & mop floors', 'Ben', '2020-12-20');
console.log(taskManager._tasks); */