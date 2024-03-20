import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js"

const appSettings = {
    databaseUrl: "https://mobileapp-f4cf9-default-rtdb.firebaseio.com/"
}
const output = document.getElementById("input-field");
const btnOutput = document.getElementById("add-button");

btnOutput.addEventListener('click', ()=> {
    let inputValue = output.value;
    console.log(`${inputValue} added to database`)
})