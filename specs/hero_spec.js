var assert = require("assert");
var Hero = require("../hero.js");
var Task = require("../task.js");
var Food = require("../food.js");

describe("Hero", (function(){

  beforeEach(function(){
    hero1 = new Hero("Faye", "Sprouts");
    task1 = new Task("Hunt Goblins", 2, "Low", 20);
    task2 = new Task("Clean desk", 1, "High", 40);
    task3 = new Task("Buy apples", 5, "High", 10);
    food1 = new Food("Hot Dog", 10);
    food2 = new Food("Sprouts", 10);
  });

  it("should have a name", function(){
      assert.strictEqual(hero1.name, "Faye");
  });

  it("should have a fav food", function(){
    assert.strictEqual(hero1.favFood, "Sprouts");
  });

  it("should have 20 health at start", function(){
    assert.strictEqual(hero1.health, 20);
  });

  it("should talk and say name", function(){
    assert.strictEqual(hero1.talk, "My name is Faye");
  });

  it("should have no tasks at start", function(){
    assert.strictEqual(hero1.tasks.length, 0);
  });

  it("should be able to take new tasks", function(){
    hero1.addTask(task1);
    assert.strictEqual(hero1.tasks.length, 1);
  });

  it("should be able to eat food", function(){
    hero1.eat(food1);
    assert.strictEqual(hero1.health, 30);
  })

  it("should recognise favFood", function(){
    hero1.eat(food2);
    assert.strictEqual(hero1.health, 35);
  });

  it("should get tasks by index", function(){
    hero1.addTask(task1);
    assert.strictEqual(hero1.tasks[0], task1);
  });

  it("should be able to sort tasks by parameter", function(){
    hero1.addTask(task1);
    hero1.addTask(task2);
    hero1.addTask(task3);
    hero1.sortTasks("reward");
    assert.strictEqual(hero1.tasks[0].description, "Buy apples");
  });




}));
