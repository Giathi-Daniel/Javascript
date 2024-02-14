let firstCard = 6;
let secondCard = 9;
let sum = firstCard + secondCard + 6;
let hasBlackJack = false;
let message = "";
let isAlive = true;

let messageEl = document.getElementById("message-el");
// let cardsEl = document.getElementById("cards-el");
// let sumEl = document.getElementById("sum-el");

function startGame() {
    // sum += 20; // Adding 20 to the sum for demonstration purposes
    if (sum <= 20) {
        message = "Do you want to draw a new card?";
    } else if (sum === 21) {
        message = "Wohoo! You've got Blackjack!";
        hasBlackJack = true;
    } else {
        message = "Whoops! You lose!";
        isAlive = false;
    }
    messageEl.textContent = message;
    // cardsEl.textContent = "Cards: " + firstCard + ", " + secondCard; // Display cards
    // sumEl.textContent = "Sum: " + sum; // Display sum
}