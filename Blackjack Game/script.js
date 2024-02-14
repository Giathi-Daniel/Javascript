let firstCard = 6
let secondCard = 9
let sum = firstCard + secondCard + 20
let hasBlackJack = false 
let message = ""
let isAlive = true

if (sum <= 20) {
    message = "Do you want to draw a new card? 🙂"
} else if (sum === 21) {
    message = "Wohoo! You've got Blackjack! 🥳"
    hasBlackJack = true
} else {
    message = "Whooops! You loose! 😭"
    isAlive = false
} 

// CASH OUT
alert(message)
alert(hasBlackJack)