
var Hero = function (name, favFood) {
  this.name = name;
  this.favFood = favFood;
  this.health = 20;
  this.talk = talk(this.name);
  this.tasks = [];
};

var talk = function(nameToSay){
  return ("My name is " + nameToSay);
};

var eat = function(newTask){
  this.tasks.push(newTask);
}

module.exports = Hero;
