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