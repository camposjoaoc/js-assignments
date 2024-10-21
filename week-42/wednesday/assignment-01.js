// Instructions 
// Create a simple program that returns a price tag 
// from the user, then give them a discount of 10 procent

// Task:
// 1. Ask the user to enter a price tag using prompt(), for example: $49.99
// 2. Convert the input from string to number
// 3. Reduce the price by 10 porcent
// 4. Print out the new price using console.log(), for example: 'New price: $44.99' 

function runExercise1() {
    let priceTag; // Variable to hold the user input for the price
    let discountedPrice; // Variable to hold the calculated discounted price

    // Prompt the user to enter a price and store it as a string
    priceTag = prompt("Enter the price tag:");
    console.log(priceTag);

    // Removes currency symbols ($, €, £) from the priceTag string, leaving only the numeric value
    priceTag = priceTag.replaceAll("$", "")
        .replaceAll("€", "")
        .replaceAll("£", "");

    // Convert the priceTag to a floating-point number and apply a 10% discount
    discountedPrice = parseFloat(priceTag) * 0.9;

    // Log the original price entered by the user
    console.log(`The original price was: $${priceTag}`);

    // Log the new price with a 10% discount, formatted to two decimal places
    console.log(`New price with 10% of discount: $${discountedPrice.toFixed(2)}`);

    // The toFixed(2) method rounds the number to two decimal places
}