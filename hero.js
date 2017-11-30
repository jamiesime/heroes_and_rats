
var Hero = function (name, favFood) {
  this.name = name;
  this.favFood = favFood;
  this.health = 20;
  this.talk = talk(this.name);
};

var talk = function(nameToSay){
  return ("My name is " + nameToSay);
};

module.exports = Hero;
