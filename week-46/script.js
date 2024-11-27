// Instructions:
// Typing - game
// REQUIREMENTS: 

// PART 1 
// Create a addWordToDOM function that will give a random word to the user 
// Create a updateScore function that will increment score by 1 
// Add an event listener to the text element.When you type in the correct word, the function should:
// ---- update score  
// ---- give the user a new word  
// ---- increment time by 5 seconds  
// ---- reset the input to empty string 

// PART 2 
// Counting down - timer 
// Create a updateTime function, every time it runs it should decrement 1 from the timer 
// Create a gameOver function that will open once the timer hits zero 

// PART 3, OPTIONAL: 

// Add an event listener to the settings button that will hide the settings 
// Add an event listener for the settings form so that you can change the difficulty 
// Set time depending on difficulty in the eventlistener 

// Variables for the DOM elements

// Array
const words = [
    "dependent",
    "dog",
    "superficial",
    "admit",
    "juice",
    "javascript",
    "developer",
    "airplane",
    "great",
    "fun",
    "manipulate",
    "cat",
    "transition",
    "school",
    "computer",
    "programming",
    "drag",
    "loving",
    "north",
];
// Set an interval to update the time every second
const timeout = setInterval(updateTime, 1000);
// Select the input field
const input = document.querySelector("input");
// Get element time
const newTime = document.getElementById("time");
// Initialize score to 0
let score = 0;
// Variable to store a random number used for selecting words
let randomNumber;
// Variable to store a random word from the array of words
let randomWord = "";


// Call the function to display the initial word
addWordToDOM();

/**
 * Function to add a new word to the DOM
 * - Selects a random word from the words array
 * - Updates the DOM element with the new word
 */
function addWordToDOM() {
    const newWord = document.getElementById("word");

    // Generate a random index within the words array
    randomNumber = Math.floor(Math.random() * words.length);

    // Select a random word from the words array and store it in the randomWord variable
    randomWord = words[randomNumber];

    // Log the word to the console for debugging
    console.log(randomWord);

    // Update the text content of the word element
    newWord.textContent = randomWord;
}

/**
 * Function to update the score
 * - Increases the score by 1
 * - Updates the score display in the DOM
 */
function updateScore() {
    const newScore = document.getElementById("score");

    // Increment the score
    score++;

    // Log the score to the console for debugging
    console.log(score);

    // Update the score display in the DOM
    newScore.textContent = score;
}

/**
 * Function to get the current time from the DOM
 * - Retrieves the time displayed in the DOM
 * - Removes the "s" suffix and parses it as an integer
 * - Returns the parsed time
 */
function getTime() {
    // Get the current time as an integer
    let currentTime = newTime.innerText;
    currentTime = currentTime.replaceAll("s", ""); // Remove the "s" suffix
    currentTime = parseInt(currentTime);

    // Log the current time for debugging
    console.log(currentTime);

    return currentTime;
}

/**
 * Function to add additional time
 * - Increases the current time by 5 seconds
 * - Updates the time display in the DOM
 */
function addTime() {

    // Get the current time as an integer
    let currentTime = getTime();

    // Add 5 seconds to the current time
    currentTime += 5;

    // Update the time display in the DOM
    newTime.textContent = currentTime + "s";
}

/**
 * Function to update the remaining time
 * - Decreases the time by 1 second
 * - Stops the interval if time reaches 0
 * - Updates the time display in the DOM
 */
function updateTime() {

    // Get the current time as an integer
    let currentTime = getTime();

    // If time reaches 0, stop the interval
    if (currentTime == 0) {
        gameOver()
        clearInterval(timeout);
    } else {
        // Decrease the time by 1 second
        currentTime--;

        // Update the time display in the DOM
        newTime.textContent = currentTime + "s";
    }
}

/**
 * Function to handle the game over scenario
 * - Displays the "Game Over" message
 * - Shows the player's final score
 * - Provides a button to reload the game and play again
 * - Makes the "end-game-container" visible in the DOM
 */
function gameOver() {
    // Select the DOM element for displaying the game over message
    const endGame = document.getElementById("end-game-container");

    // Update the inner HTML of the element with the game over message and score
    endGame.innerHTML = `
        <h1>Game Over</h1>
        <p>Your final score is ${score}</p>
        <button onClick="window.location.reload();">Play Again</button>`;

    // Change the display style to "flex" to make the element visible
    endGame.style.display = "flex";
}

/**
 * Event listener for keypress events on the input field
 * - Checks if the entered word matches the displayed word
 * - Updates the score, adds a new word, increments time, and clears the input field on success
 * - Logs an error message and clears the input field on failure
 */
input.addEventListener("keypress", function (e) {
    let inputWord = e.target.value;

    // If the Enter key is pressed
    if (e.key === "Enter") {
        // Check if the input word matches the current word
        if (inputWord == randomWord) {
            // Correct word: update score, add a new word, add time, and clear the input
            updateScore();
            addWordToDOM();
            addTime();
            input.value = "";
        } else {
            // Wrong word: log an error and clear the input
            console.log("Wrong!");
            input.value = "";
        }
    }
});
