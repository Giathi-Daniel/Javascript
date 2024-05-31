const div = document.createElement('div')
div.className = 'my-element' //adds a class
div.id = 'my-element'

// div.innerText = 'Hello world'

const text = document.createTextNode('Hello World!')
div.appendChild(text)
document.body.appendChild(div) //very end of the body tag

// console.log(div)