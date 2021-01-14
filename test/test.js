const TaskManager = require("./../js/taskManager.js");
const assert = require("assert");

/* describe('TaskManager test suite', () => {
  it('should add a task', () => {
    const taskManager = new TaskManager(0);
    let len = taskManager.tasks.length;
    taskManager.addTask('taskName', 'taskDescription', 'assignedTo', 'dueDate');
    if (len < taskManager.tasks.length) {
      assert.ok(taskManager.tasks[0].assignedTo, 'assignedTo');
    }
  });
}) */

describe("TaskManager test suite", () => {
  it("should add a task", () => {
    const taskManager = new TaskManager(0);
    const expectedLength = 1;

    const resultLength = taskManager.tasks.length;
    taskManager.addTask('taskName', 'taskDescription', 'assignedTo', 'dueDate');

    assert.ok(resultLength, expectedLength);

  });
});

