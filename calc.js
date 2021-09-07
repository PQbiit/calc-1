const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

reader.question("What would you like to calculate?", function(input){
	tokens = input.split(' ');
	
	mathSymbol = tokens[0];
	num1 = Number(tokens[1]);
	num2 = Number(tokens[2]);

	// Implentation of calculator using if statement for handling mathematical operations

	if (mathSymbol === '+') {
		console.log(num1 + num2);
	}

	if (mathSymbol === '-') {
		console.log(num1 - num2);
	}

	if (mathSymbol === '*') {
		console.log(num1 * num2);
	}

	if (mathSymbol === '/') {
		console.log(num1 / num2);
	}

	if (mathSymbol === 'sqrt') {
		console.log(Math.sqrt(num1));
	}
	

	// Further study: extending calculator functionality

	if (mathSymbol === 'sq') {
		console.log(Math.pow(num1,2));
	}

	if (mathSymbol === 'cube') {
		console.log(Math.pow(num1,3));
	}

	if (mathSymbol === 'pow') {
		console.log(Math.pow(num1,num2));
	}

	if (mathSymbol === '%') {
		console.log(num1 % num2);
	}

	//Implentation of calculator using switch statement for handling mathematical operations

	switch (mathSymbol) {
		case "+":
			console.log(num1 + num2)
			break;
		case "-":
			console.log(num1 - num2)
			break;
		case "*":
			console.log(num1 * num2)
			break;
		case "/":
			console.log(num1 / num2)
			break;
		case "sqrt":
			console.log(Math.sqrt(num1))
			break;
		
		// Further study: extending calculator functionality
		case "sq":
			console.log(Math.pow(num1,2));
			break;
		case "cube":
			console.log(Math.pow(num1,3));
			break;
		case "pow":
			console.log(Math.pow(num1,num2));
			break;
		case "%":
			console.log(num1 % num2);
			break;
		default:
			break;
	}

	// This line closes the connection to the command line interface.
	reader.close()

});
