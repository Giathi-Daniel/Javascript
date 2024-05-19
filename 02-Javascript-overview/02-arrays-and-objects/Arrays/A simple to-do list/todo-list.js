const todoList = [];
const addBtn = document.querySelector('#addTodo');


addBtn.addEventListener('click', () => {
    const todoInput = document.querySelector('.js-todo-name-simple');
    const name = todoInput.value;

    todoList.push(name);
    console.log(todoList);

    // refresh when the btn is clicked
    todoInput.value = ""

    // => Challenge (complete the code below to render in HTML doc as well as show when an element is being added to the array)
    todoList.forEach(list => {
        const listItem =  `<p>${list}</p>`;

        document.querySelector('.js-todo-list-simple-2').innerHTML = listItem;

        console.log(listItem)

            // method b
        // let todoListHTML = ''
        // todoListHTML += listItem
        // document.querySelector('.js-todo-list-simple-2').innerHTML = todoListHTML;
    })
})
