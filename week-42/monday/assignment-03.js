// EXERCISE 3:  
// Basic arithmetic operations 
// Write a JavaScript program that performs basic arithmetic operations: addition, subtraction, multiplication, and division.  
// Create two variables with numbers, and then use these variables to perform the operations using console.log(). 

function runExercise3() {
    let number1;
    let number2;
    //Opens the prompt for the user to enter values
    number1 = parseFloat(prompt("Please, type the first number:"));// Convert the input to a number
    number2 = parseFloat(prompt("Please, type the second number:"));// Convert the input to a number
    //Prints basic mathematical operations according to previously entered values
    console.log(`The sum of the values ${number1} is: ${number1 + number2}`);
    console.log(`The subtraction of the values ${number1} is: ${number1 - number2}`);
    console.log(`The multiplication of the values ${number1} is: ${number1 * number2}`);
    console.log(`The division of the values ${number1} is: ${number1 / number2}`);
}