const todoList = [];
const addBtn = document.querySelector('#addTodo');


addBtn.addEventListener('click', () => {
    const todoInput = document.querySelector('.js-todo-name-simple');
    const name = todoInput.value;

    todoList.push(name);
    console.log(todoList);

    // refresh when the btn is clicked
    todoInput.value = ""
})
