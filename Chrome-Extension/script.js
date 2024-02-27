let myLeads = ["www.awesomelead.com", "www.epiclead.com", "www.greatlead.com"]
const inputEl = document.getElementById('input-el');
const saveBtn = document.getElementById('input-btn');
const listEl = document.getElementById("ul-el")

saveBtn.addEventListener("click", function(){
    myLeads.push(inputEl.value);
    // clear
    inputEl.value = ""
    return renderLeads();
})

function renderLeads() {
    let listItems = ""
    for (let i = 0; i < myLeads.length; i++) {
        listItems += `<li>${myLeads[i]}</li>`;
        console.log('listItems', listItems);
        
        listEl.innerHTML = listItems;
    }
}