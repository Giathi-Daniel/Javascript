let myLeads = ["www.awesomelead.com", "www.epiclead.com", "www.greatlead.com"]
const inputEl = document.getElementById('input-el');
const saveBtn = document.getElementById('input-btn');
const listEl = document.getElementById("ul-el")

saveBtn.addEventListener("click", function(){
    // myLeads.push(inputEl.value);
    // console.log('myLeads', myLeads);

    for (let i = 0; i < myLeads.length; i++) {
        // listEl.textContent += myLeads[i];
        listEl.innerHTML += `<li>${myLeads[i]}</li>`;
    }
})