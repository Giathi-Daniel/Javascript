let firstCard = 10;
let secondCard = 1;
let cards = [firstCard, secondCard];
let sum = firstCard + secondCard;
let hasBlackJack = false;
let message = "";
let isAlive = true;

let messageEl = document.getElementById("message-el");
let cardsEl = document.getElementById("cards-el");
let sumEl = document.querySelector("#sum-el");







// function startGame() {
//     displayGameInfo();
// }

// function newCard() {
//     alert("Drawing a new card from the deck!");
//     let card = Math.floor(Math.random() * 13) + 1; // Generate a random card value between 1 and 13
//     sum += card; // Add the new card value to the sum

//     // Update the UI with the new card and sum values
//     cardsEl.textContent += ", " + card;
//     sumEl.textContent = "Sum: " + sum;

//     displayGameInfo();
// }

// function displayGameInfo() {
//     cardsEl.textContent = "Cards: " + cards.join(", ");
//     sumEl.textContent = "Sum: " + sum;

//     if (sum <= 20) {
//         message = "Do you want to draw a new card?";
//     } else if (sum === 21) {
//         message = "Wohoo! You've got Blackjack!";
//         hasBlackJack = true;
//     } else {
//         message = "Whoops! You lose!";
//         isAlive = false;
//     }
//     messageEl.textContent = message;
// }
