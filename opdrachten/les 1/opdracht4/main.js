// ----------------------------------------------------- //
// LES 1 - OPDRACHT 4
// ----------------------------------------------------- //

// 4.1 Local scope

function localScope() {
	// this var is only accessable inside this function and nested functions
	var food = 'Beagles';

	function eat() {
		console.log('I am eating' + food);
	}
}

console.log(food); // Error! food is not defined!

// 4.2 Global scope

var cow = 'Bertha';

function globalScope() {
	// global var change
	cow = 'Getrude';
	// this function changes the global var
	function getCows() {
		console.log('We need to get' + cow + ' out of the woods');
	}
}

//  4.3 Closure