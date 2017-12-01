var _ = require('lodash');

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

Hero.prototype = {

  addTask: function(newTask){
    this.tasks.push(newTask);
  },

  eat: function(food){
    if (food.name === this.favFood){
      this.health += food.value * 1.5;
    }
    else {
      this.health += food.value;
    }
  },

  sortTasks: function(parameter){
      var newOrder = _.orderBy(this.tasks, [parameter], ["asc"]);
      this.tasks = newOrder;
  }


}

module.exports = Hero;
