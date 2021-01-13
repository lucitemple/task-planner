const assert = require("assert");
const planner = require("../index.js");
const taskMgr = required("../taskManager.js");

describe('Testing addTask', function() {
    it('taskName should not be empty', function() {
        const taskName = "Shopping";
        const expected = "Shopping";
        const result = taskMgr.addTask(taskName);

        assert.strictEqual(result, expected);

    });
});