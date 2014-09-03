// ----------------------------------------------------- //
// LES 1 - OPDRACHT 4
// ----------------------------------------------------- //

// 4.1 Local scope

function localScope() {
	// this var is only accessable inside this function and nested functions
	var food = 'Beagles';
	var iterator = '2';
	var max = '40';
	var min = '4';

	function eat() {
		console.log('I am eating' + food);
	}
}

console.log(food); // Error! food is not defined!

// 4.2 Global scope

var cow = 'Bertha';
var iterator = '2';
var max = '40';
var min = '4';

function globalScope() {
	// global var change
	cow = 'Getrude';
	// this function changes the global var
	function getCows() {
		console.log('We need to get' + cow + ' out of the woods');
	}
}

//  4.3 Closure

// The inner function has access to variables in the outer function
// Simply accessing variables outside of your current function scope creates a closure

var firstNumber = 10;

function test() {
  console.log(exampleNumber); // will output 10
  console.log(secondNumber); // will output 6
}

var secondNumber = 6;
test();