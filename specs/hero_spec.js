var assert = require("assert");
var Hero = require("../hero.js");

describe("Hero", (function(){

  beforeEach(function(){
    hero1 = new Hero("Faye");
  });

  it("should have a name", function(){
      assert.strictEqual(hero1.name, "Faye");
  });

}));
