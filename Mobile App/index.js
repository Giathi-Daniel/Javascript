import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js"
import { getDatabase, ref,  push, onValue, remove } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js"

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
    let itemsArray = Object.entries(snapshot.val()) 
    
    clearShopping()
    
    for (let i = 0; i < itemsArray.length; i++) {

        let itemsArrayItem = itemsArray[i]

        let currentItemId = itemsArrayItem[0]
        let currentItemValue = itemsArrayItem[1]

        appendValue(itemsArrayItem)
        console.log(currentItemId)
        console.log(currentItemValue)
    }
    
})

function clearShopping() {
    shoppingEl.innerHTML = ""
}

function clearInput(){
    inputFieldEl.value = ""
}

function appendValue(item){
    let itemID = item[0]
    let itemValue = item[1]

    let newEl = document.createElement("div")
    newEl.textContent = itemValue

    newEl.addEventListener("dblclick", () => {
        let exactItemLocationInDB = ref(database, `shoppingList/${itemID}`)

        remove(exactItemLocationInDB)
        console.log(itemID)
    })
    
    shoppingEl.appendChild(li);
}
    
    
