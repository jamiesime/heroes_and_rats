var assert = require("assert");
var Hero = require("../hero.js");

describe("Hero", (function(){

  beforeEach(function(){
    hero1 = new Hero("Faye", "Sprouts");
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

}));
