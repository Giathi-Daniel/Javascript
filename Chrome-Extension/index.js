let myLeads = []
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")

inputBtn.addEventListener("click", function() {
    myLeads.push(inputEl.value)
    inputEl.value = ""
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





// WORKING WITH JSON
let myLeadS = `["www.w3schools.com"]`

// converting string to an object
myLeadS = JSON.parse(myLeadS);
alert(typeof myLeadS)

// addding a new element to the object
myLeadS.push("www.google.com")

// convertin back object to a string
myLeadS  = JSON.stringify(myLeadS)
alert(typeof myLeadS)
