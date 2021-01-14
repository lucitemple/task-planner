const TaskManager = require("./../js/taskManager.js");
const assert = require("assert");

  // Lavina's code
describe("Task Manager functions", () => {
      const taskManager = new TaskManager(0);
  it("Should add a task", function () {
    const expected = 1;
    taskManager.addTask("shoppping", "At Aldi", "Lavina", "24/01/2021");
    let result = taskManager._tasks.length;
    assert.strictEqual(result, expected);
  });  

    it("Should delete a task", function () {
      const expected = taskManager._tasks.length -1;  // expected length of array after deletion
      taskManager.deleteTask(0); // run deleteTask method
      const result = taskManager._tasks.length;   // actual length of array after deletion

      assert.strictEqual(result, expected);
    }); 
})



/* describe('TaskManager test suite', () => {
  it('should add a task', () => {
    const taskManager = new TaskManager(0);
    let len = taskManager._tasks.length;
    taskManager.addTask('Shopping', 'Buy groceries', 'Mary', '24/12/21');
    if (len < taskManager._tasks.length) {
      assert.ok(taskManager._tasks[0].assignedTo, 'assignedTo');
    }
  }); 

  it('should delete a task', () => {
    const taskManager = new TaskManager(0);
        let len = taskManager._tasks.length;
    taskManager.addTask('Shopping', 'Buy groceries', 'Mary', '24/12/21');
    if (len < taskManager._tasks.length) {
      assert.ok(taskManager._tasks[0].assignedTo, 'assignedTo');
    }
  });
}); */
