function exercise() {
    // Prompt the user to enter a number
    let newNumber = prompt("Please, type your number:");
    // Convert the user input from string to an integer
    newNumber = parseInt(newNumber);

    // Call generateRandomArray with the user's input as length and log the result to the console
    console.log(generateRandomArray(newNumber));
}

// Function to generate an array of random numbers with the specified length
function generateRandomArray(length) {
    // Initialize an array with the specified length
    let randomArray = Array(length);

    // Populate the array with random numbers between 1 and 100
    for (let i = 0; i < length; i++) {
        let randomNumber = Math.floor(Math.random() * 100) + 1;
        randomArray[i] = randomNumber;
    }

    // Return the generated array
    return randomArray;
}

