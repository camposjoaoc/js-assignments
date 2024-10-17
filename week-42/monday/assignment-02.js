// EXERCISE 2:  
// Create variables and use them 
// Create three variables: one to store your name, one for your age, and one for your favorite color.
// Then, use console.log() to print a sentence that includes all three variables. 

let firstName;
let myAge;
let favoriteColor;

function runExercise2() {
    //Opens the prompt for the user to enter values
    firstName = prompt("Please, type your name:");
    myAge = prompt("Please, type your Age:");
    favoriteColor = prompt("Please, type your favorite color:");
    //Prints a message with the previously entered values
    console.log(`My name is ${myName}, I am ${myAge} years old. My favorite color is ${favoriteColor}.`);
}