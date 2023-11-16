// 👇 COMPLETE YOUR WORK BELOW 👇
/* ❗❗ NOTE: PLEASE USE INDIVIDUAL KEYS FOR YOUR CONSTRUCTOR PARAMETERS, NOT OBJECTS. THE TESTS WILL NOT PASS WITH OBJECTS. ❗❗  */

/*
  TASK 1
    - Write a Person Constructor that initializes `name` and `age` from arguments.
    - All instances of Person should initialize with an empty `stomach` array.
    - Give instances of Person the ability to `.eat("someFood")`:
        + .eat() should recieve a string as a parameter and take some type of edible as an argument
        + When eating an edible, it should be pushed into the `stomach` array.
        + The `eat` method should have no effect if there are 10 items in the `stomach` array.
    - Give instances of Person the ability to `.poop()`:
        + When an instance poops, its `stomach` array should be empty.
    - Give instances of Person a method `.toString()`:
        + It should return a string with `name` and `age`. Example: "Mary, 50"
*/

function Person(name, age) {
  this.name = name;
  this.age = age;
  this.stomach = [];
  this.poop = function(){
    this.stomach = [];
  },
  this.toString = function(){
    return `${this.name}, ${this.age}`
  }
}

Person.prototype.eat = function(food){
  if (this.stomach.length !== 10){
    this.stomach.push(food)
  }
}

Person.prototype.poop = function(){
  this.stomach = [];
}

Person.prototype.toString = function(){
  return `${this.name}, ${this.age}`
}

/*
  TASK 2
    - Write a Car constructor that initializes `model` and `milesPerGallon` from arguments.
    - All instances built with Car:
        + should initialize with an `tank` at 0
        + should initialize with an `odometer` at 0
    - Give cars the ability to get fueled with a `.fill(gallons)` method
      + should take 'gallons' as an parameter which will take number of gallons as an argument
      + should add the gallons to `tank`.
    - STRETCH: Give cars ability to `.drive(distance)`. The distance driven:
        + Should cause the `odometer` to go up.
        + Should cause the the `tank` to go down taking `milesPerGallon` into account.
    - STRETCH: A car which runs out of `fuel` while driving can't drive any more distance:
        + The `drive` method should return a string "I ran out of fuel at x miles!" x being `odometer`.
*/

function Car(model, milesPerGallon) {
  this.model = model
  this.milesPerGallon = milesPerGallon
  this.tank = 0;
  this.odometer = 0;
}

Car.prototype.fill = function(gallons){
  if(gallons > 0){
    this.tank += gallons;
  }
}

/*
  TASK 3
    - Write a Baby constructor subclassing Person.
    - Besides `name` and `age`, Baby takes a third argument to initialize `favoriteToy`.
    - Besides the methods on Person.prototype, babies also have the ability to `.play()`:
        + Should return a string "Playing with x", x being the favorite toy.
*/

function Baby(name, age, favoriteToy) {
  Person.call(this, name, age);
  this.name = name;
  this.age = age;
  this.favoriteToy = favoriteToy;
};

Baby.prototype = Object.create(Person.prototype);

Baby.prototype.play = function(){
  return `Playing with ${this.favoriteToy}`
}



/* 
  TASK 4
  In your own words explain the four principles for the "this" keyword below:
  1.Global binding - the value of 'this' will be bound to entire window or console object when it is used in the global scope.

  2.Implicit Binding - When a method is called on an object, "this" inside that method refers to the object itself. The binding 
  is implicit because it is based on the context of the function invocation.

  3.New Binding - When a function is used as a constructor with the "new" keyword, a new object is created, and "this" inside 
  the constructor refers to that newly created object. This is known as the new binding.

  4. Explicit binding - You can explicitly specify what "this" refers to using functions like .call(), .apply(), or .bind(). 
  These methods allow you to set the context of "this" by passing an object as an argument.
*/

///////// END OF CHALLENGE /////////

/* 🛑🛑🛑🛑🛑🛑🛑🛑🛑🛑 Please do not modify anything below this line 🛑🛑🛑🛑🛑🛑🛑🛑🛑🛑 */
function foo(){
  console.log('its working!');
  return 'bar';
}
foo();
module.exports = {
  foo,
  Person, 
  Car,
  Baby
}
