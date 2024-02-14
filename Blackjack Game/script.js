let firstCard = 6
let secondCard = 9
let sum = firstCard + secondCard + 6 + 6

if (sum < 21) {
    alert("Do you want to draw a new card? 🙂")
} else if (sum === 21) {
    alert("Wohoo! You've got Blackjack! 🥳")
} else {
    alert("Whooops! You loose! 😭")
} 