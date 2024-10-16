// EXERCISE 3:  
// Basic arithmetic operations 
// Write a JavaScript program that performs basic arithmetic operations: addition, subtraction, multiplication, and division.  
// Create two variables with numbers, and then use these variables to perform the operations using console.log(). 

let number1;
let number2;

function runExercise3() {
    number1 = parseFloat(prompt("Please, type the first number:"));// Convert the input to a number
    number2 = parseFloat(prompt("Please, type the second number:"));// Convert the input to a number

    console.log(number1 + " + " + number2 + " is: " + (number1 + number2));
    console.log(number1 + " - " + number2 + " is: " + (number1 - number2));
    console.log(number1 + " * " + number2 + " is: " + (number1 * number2));
    console.log(number1 + " / " + number2 + " is: " + (number1 / number2));
}