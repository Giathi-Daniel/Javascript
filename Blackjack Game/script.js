//Create the player object. Give it two keys, name and chips, and set their values
let player = {
    name: "Daniel Giathi",
    chips: 19
}
let cards = []
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")
// 3. Grab ahold of the player-el paragraph and store it in a variable called playerEl
let playerEl = document.getElementById("player-el")

// 4. Render the player's name and chips in playerEl
playerEl.textContent = player.name + ": $" + player.chips






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
