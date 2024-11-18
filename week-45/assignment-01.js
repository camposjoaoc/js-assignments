// BANK ACCOUNT //
// REQUIREMENTS //
// Create an object called account that has the following properties:
// accountName, should be the data type string 
// This property should contain the name of the account holder

//     - balance, should be the data type number 
// this property should contain the total amount of the account

//     - getBalance, should be a function 
// this function should display the total amount of the account to the user

//     - deposit, also a function 
//  this function should be able to deposit money onto the balance of the account

//     - withdrawal, also a function 
//  this function should be able do withdrawal money from the balance of the account

//     - getAccountName, function as well
// this function should dispaly the account holders name to the user

//     - accountError, same as above function!
// this one is a bit tricky... it's up to you to figure out how or what you should use this for. 

// HINT: it's more a thinking poblem than a technical problem :) 

// EXTRA: exitAccount, should be a function 
//  this function should exit the account
// HINT: there are a few different ways to do this, it's up to you which way you choose. 
/////////////////////////////////////////////////////////////////////////////////////////
// Object for the bank account
const bankAccount = {
    accountName: "Default Account", // Account name
    balance: 0, // Account balance

    // Show the account balance
    getBalance() {
        console.log(`Your Balance is: ${this.balance}`);
    },

    // Add money to the account
    deposit() {
        let newDeposit = prompt("Please, enter the deposit amount:"); // Ask for deposit amount
        newDeposit = parseFloat(newDeposit); // Convert to number

        // Check if the amount is valid
        if (isNaN(newDeposit) || newDeposit <= 0) {
            console.log("Invalid deposit amount."); // Show error if invalid
        } else {
            this.balance += newDeposit; // Add amount to balance
            console.log(`Deposit successful. Your new balance is: ${this.balance}`);
        }
    },

    // Take money from the account
    withdrawal() {
        let newWithdrawal = prompt("Please, enter the Withdrawal amount:"); // Ask for withdrawal amount
        newWithdrawal = parseFloat(newWithdrawal); // Convert to number

        // Check if the amount is valid
        if (isNaN(newWithdrawal) || newWithdrawal <= 0) {
            console.log("Invalid deposit amount."); // Show error if invalid
        } else {
            this.balance -= newWithdrawal; // Subtract amount from balance
            console.log(`Withdrawal successful. Your new balance is: ${this.balance}`);
        }
    },

    // Show the account name
    getAccountName() {
        console.log(`The name of the account is: ${this.accountName}`);
    },

    // Exit the account
    exitAccount() {
        controlAtm = false; // Stop the ATM
        console.log("Thank you for using our services!");
    },
};

// Variable to control the ATM loop
let controlAtm = true;

// Function to run the ATM
function atm() {
    const message = parseFloat(
        prompt(
            "Select a choice 1.) See balance 2.) Make a deposit 3.) Make a withdrawal 4.) Get account name 5.) Exit"
        )
    );

    // Handle user choice
    switch (message) {
        case 1:
            bankAccount.getBalance(); // Show balance
            break;
        case 2:
            bankAccount.deposit(); // Make a deposit
            break;
        case 3:
            bankAccount.withdrawal(); // Make a withdrawal
            break;
        case 4:
            bankAccount.getAccountName(); // Show account name
            break;
        case 5:
            bankAccount.exitAccount(); // Exit
            break;
        default:
            alert("Invalid choice."); // Show error for invalid choice
    }

    // Keep the ATM running
    if (controlAtm) {
        atm();
    }
}

// Start the ATM
atm();
