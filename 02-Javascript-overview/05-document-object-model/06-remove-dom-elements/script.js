function removeHeader() {
    const header = document.querySelector('header')
    header.remove()
}
removeHeader()

function removeFirstItem() {
    const ul = document.querySelector('.items')
    const li = document.querySelector('li:first-child')

    ul.removeChild(li) //first get the parent then the child
}
removeFirstItem()

const removeItem3 = (itemNumber) => document.querySelectorAll('li')[itemNumber - 1].remove()

removeItem3(2)

// eventListener
function run() {
    className = 'white'
}

document.querySelector('button').onclick = run