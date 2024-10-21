// Instructions
// Write a isValidPassword function
//     It accepts 2 arguments: password and username
// Password must:
// - be atleast 8 characters
//     - cannot contain spaces
//         - cannot contain the username
// If all requirements are met, return true,
//     otherwise return false

function isValidPassword() {
    let firstName; // Variable to hold the user's first name
    let newPassword; // Variable to hold the user's password

    firstName = prompt("Please, type your Name:"); // Prompt user to enter their name
    newPassword = prompt("Please, type your Password:"); // Prompt user to enter their password

    // Loop until the password meets the specified criteria
    while (newPassword.length < 8 || newPassword.includes(" ") || newPassword.includes(firstName)) {
        console.log("Password is invalid (False)."); // Log "False" if the password is invalid
        // Provide feedback to the user about password requirements
        alert("Password must be at least 8 characters long, cannot contain spaces, and must not include your name.");
        newPassword = prompt("Please, type a valid password:"); // Prompt user to re-enter their password

    }
    // Log "True" to indicate successful validation
    console.log("Password is valid (True).");
    // Log the user's name and password if the password is valid
    console.log(`Your Name: ${firstName}`);
    console.log(`Valid Password: ${newPassword}`);
}

