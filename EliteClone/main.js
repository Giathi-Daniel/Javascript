const filter = document.querySelector('.options');
const buttonClicked = document.querySelector('.select');


buttonClicked.addEventListener('click', () => { 
    // filter.style.display = 'flex';
    filter.style.display = filter.style.display === 'flex' ? 'none' : 'flex';
});

window.addEventListener('click', (event) => { element
    if (event.target !== buttonClicked && !filter.contains(event.target)) {
        filter.style.display = 'none';
    }
});

const menu = document.querySelector("#openMenu")
const display = document.querySelector(".nav_links", ".account_btn")
const close = document.querySelector("#closeMenu")

menu.addEventListener('click', ()=> {
    display.classList.toggle("active")
    menu.style.display = "none"
    close.style.display = "block"
})

close.addEventListener('click', ()=> {
    display.classList.remove("active")
    menu.style.display = "inline-block"
    close.style.display = "none"
})