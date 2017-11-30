var assert = require("assert");
var Task = require("../task.js");

describe("Task", (function(){

  beforeEach(function(){
    task1 = new Task("Vile Task");
  });

  it("should have a description", function(){
    assert.strictEqual(task1.description, "Vile Task");
  });




}));
