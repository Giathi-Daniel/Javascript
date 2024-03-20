/*
Challenge:
Make it so that when you click the 'Add to cart' button, whatever is written in the input field should be console logged.
*/
const output = document.getElementById("input-field");
const btnOutput = document.getElementById("add-button");

btnOutput.addEventListener('click', ()=> {
    let inputValue = output.value;
    console.log(inputValue)
})