const TaskManager = require("./../js/taskManager.js");
const assert = require("assert");

describe('TaskManager test suite', () => {
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
  });
})

