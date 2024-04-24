function ticketPrice(age) {
    if (age <= 12) {
        return 10;
    } else if (age >= 13 && age <= 17) {
        return 15;
    } else {
        return 20;
    }
}

// Prompt the user for age
let age = prompt("Enter your age:");

// Determine ticket price
let price = ticketPrice(age);
console.log("The ticket price for your age is $" + price);
