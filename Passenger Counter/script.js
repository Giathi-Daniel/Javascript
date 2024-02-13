// document.getElementById("count-el").innerText = 5

// let count = 0

// console.log(count)

// function increment() {
//     console.log("the button was clicked")
// }

// // UNDERSTANDING FUNCTIONS
let countEL = document.getElementById("count-el");

console.log(countEL);

let count = 0

function increment() {
    count += 1
    countEL.innerText = count
}