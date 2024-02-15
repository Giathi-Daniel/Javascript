let firstCard = 6;
let secondCard = 9;
let sum = firstCard + secondCard + 6;
let hasBlackJack = false;
let message = "";
let isAlive = true;

let messageEl = document.getElementById("message-el");
let cardsEl = document.getElementById("cards-el");
let sumEl = document.querySelector("#sum-el");

function startGame() {
    cardsEl.textContent = "Cards: " + firstCard + ", " + secondCard
    sumEl.textContent = "Sum: " + sum
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
}
