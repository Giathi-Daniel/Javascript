import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js"
import { getDatabase, ref,  push, onValue } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js"

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

    console.log(`${inputValue} added to database`)
})

// the onValue functions runs whenever there are changes in the db
onValue(shopDB, function(snapshot) {
    let itemsArray = Object.values(snapshot.val()) 
    
    clearShopping()
    
    for (let i = 0; i < itemsArray.length; i++) {
        let itemsArrayItem = itemsArray[i]

        appendValue(itemsArrayItem)
        // console.log(itemsArrayItem)
    }
    
})

function clearShopping() {
    shoppingEl.innerHTML = ""
}

function clearInput(){
    inputFieldEl.value = ""
}

function appendValue(itemValue){
    // Create a new list item
    let li = document.createElement('li');
    li.textContent = itemValue;
    // Append the list item to the shopping list
    shoppingEl.appendChild(li);
}
    
    
