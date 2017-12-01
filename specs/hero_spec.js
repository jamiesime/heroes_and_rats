var assert = require("assert");
var Hero = require("../hero.js");
var Task = require("../task.js");

describe("Hero", (function(){

  beforeEach(function(){
    hero1 = new Hero("Faye", "Sprouts");
    task1 = new Task("Hunt Goblins", "Easy", "Low", "20");
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



}));
