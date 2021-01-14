const TaskManager = require("./../js/taskManager.js");
const assert = require("assert");

// Lavina's code
describe("Task Manager functions", () => {
  const taskManager = new TaskManager(0);
  it("Should add a task", function () {
    const expected = 1; // expected length of task array after adding task
    taskManager.addTask("Shopping", "Groceries", "Luci", "24/01/2021"); // addtask
    let result = taskManager._tasks.length; // task array length
    assert.strictEqual(result, expected);
  });

  it("Should delete a task", function () {
    const expected = taskManager._tasks.length - 1; // expected length of array after deletion
    taskManager.deleteTask(0); // run deleteTask method
    const result = taskManager._tasks.length; // actual length of array after deletion

    assert.strictEqual(result, expected);
  });

  it("Should get task by id", () => {
    taskManager.addTask("Shopping", "Groceries", "Luci", "24/01/2021");
    const expected = {
      assignedTo: "Luci",
      dueDate: "24/01/2021",
      id: 1,
      status: "TODO",
      taskDescription: "Groceries",
      taskName: "Shopping",
    };
    const result = taskManager.getTaskById(1);
    assert.deepStrictEqual(result, expected);

  });



});
