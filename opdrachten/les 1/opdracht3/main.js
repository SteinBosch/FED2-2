// ----------------------------------------------------- //
// LES 1 - OPDRACHT 3
// ----------------------------------------------------- //

// 3.1 Constructor object
function Person(name) {

	// set methods 'name' and 'speak'
	this.name = name;
	this.speak = function() {
		console.log('Hello, my name is ' + name + '!')
	}
}

// create a new instance of a person called Bob.
var Bob = new Person('Bob');

// 3.2 Prototype
Person.prototype.eat = function(food) {
	console.log('I am eating ' + food);
}
Person.prototype.walk = function() {
	console.log('Walking...');
}

// 3.3 Object Literal
var Person = {
	name: name;
	speak: function() {
		console.log('Hello, my name is ' + name + '!');
	}
}