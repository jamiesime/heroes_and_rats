var assert = require("assert");
var Task = require("../task.js");

describe("Task", (function(){

  beforeEach(function(){
    task1 = new Task("Vile Task", "Hard", "Emergency", "Nothing");
  });

  it("should have a description", function(){
    assert.strictEqual(task1.description, "Vile Task");
  });

  it("should have a difficulty", function(){
    assert.strictEqual(task1.difficulty, "Hard");
  });

  it("should have an urgency", function(){
    assert.strictEqual(task1.urgency, "Emergency");
  });

  it("should have a reward", function(){
    assert.strictEqual(task1.reward, "Nothing");
  });




}));
