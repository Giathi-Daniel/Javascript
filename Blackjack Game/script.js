let firstCard = 6
let secondCard = 9
let sum = firstCard + secondCard + 6
let hasBlackJack = false 

if (sum <= 20) {
    alert("Do you want to draw a new card? 🙂")
} else if (sum === 21) {
    alert("Wohoo! You've got Blackjack! 🥳")
    hasBlackJack = true
} else {
    alert("Whooops! You loose! 😭")
} 

// CASH OUT
alert(hasBlackJack)