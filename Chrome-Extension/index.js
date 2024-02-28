let myLeads = []
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")
const deleteBtn = document.getElementById("delete-btn")
const storage = JSON.parse(localStorage.getItem("myLeads"));
alert(storage)

if (storage) {
    myLeads = storage;
    renderLeads()
}

//clear localStorage when double-clicked!
deleteBtn.addEventListener("dblclick", () => {
    localStorage.clear()
    myLeads = []
    renderLeads()
})

inputBtn.addEventListener("click", function() {
    myLeads.push(inputEl.value)
    inputEl.value = ""
    // saving the myLeads array to localStorage
    localStorage.setItem("myLeads", JSON.stringify(myLeads))
    renderLeads()
})

function renderLeads() {
    let listItems = ""
    for (let i = 0; i < myLeads.length; i++) {
        listItems += `
            <li>
                <a target='_blank' href='${myLeads[i]}'>
                    ${myLeads[i]}
                </a>
            </li>
        `
    }
    ulEl.innerHTML = listItems  
}





// // WORKING WITH JSON
// let myLeadS = `["www.w3schools.com"]`

// // converting string to an object
// myLeadS = JSON.parse(myLeadS);
// alert(typeof myLeadS)

// // addding a new element to the object
// myLeadS.push("www.google.com")

// // convertin back object to a string
// myLeadS  = JSON.stringify(myLeadS)
// alert(typeof myLeadS)
