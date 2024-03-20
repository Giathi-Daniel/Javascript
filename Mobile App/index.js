import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js"
import { getDatabase, ref, push } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js"

const appSettings = {
    databaseURL: "https://mobileapp-f4cf9-default-rtdb.firebaseio.com/"
}

const app = initializeApp(appSettings)
const database = getDatabase(app)
const shopDB = ref(database, "shoppingList")

const inputFieldEl = document.getElementById("input-field")
const addButtonEl = document.getElementById("add-button")
const shoppingEl = document.getElementById("shoppingList")

addButtonEl.addEventListener("click", ()=> {
    let inputValue = inputFieldEl.value
    
    push(shopDB, inputValue)

    clearInput()

    appendValue(inputValue)

    console.log(`${inputValue} added to database`)
})

function clearInput(){
    inputFieldEl.value = ""
}

function appendValue(itemValue){
    shoppingEl.innerHTML = `<li>${itemValue}</li>`
}
    
    
