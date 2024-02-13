// document.getElementById("count-el").innerText = 5

// let count = 0

// console.log(count)

// function increment() {
//     console.log("the button was clicked")
// }

// // UNDERSTANDING FUNCTIONS
let saveEl = document.getElementById("save-el")
let countEL = document.getElementById("count-el");
let count = 0

function increment() {
    count += 1
    countEL.innerText = count
}

function save() {
    let countStr = count + " - " //a variable that contains both the dashes and the separator
    saveEl.textContent += countStr //rendering the variable in the saveEl using innerTex
    // console.log(count)
}

save()