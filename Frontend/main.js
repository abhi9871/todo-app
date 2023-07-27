// Get the todo form element by the id
const todoForm = document.getElementById('todo');

// Get the pending todo list ul element by the id
let pendingTodoList = document.getElementById('todoPendingList');

// Get the completed todo list ul element by the id
let completedTodoList = document.getElementById('todoCompletedList');

// Add an event listener to a todo form
todoForm.addEventListener('submit', todoItemsForm);

async function todoItemsForm(e) {
    e.preventDefault();  // Prevent form submission to avoid page refresh
    let todoName = document.getElementById('todoName');
    let todoDescription = document.getElementById('todoDescription');

    // Create a todo form data object
    const todoItemData = {
        name: todoName.value,
        description: todoDescription.value
    }

    // Create a todo item
    createTodoItem(todoItemData);

    form.reset();
}

    // Show todo items on screen
    function todoOnScreen(todoData) {

    }

    // get all the todo items
    async function getTodoItems() {

    }

    // create a todo item
    async function createTodoItem(todoData) {

    }

    // update a todo item
    async function updateTodoItem(todoItemId, todoData) {

    }

    // delete a todo item
    async function deleteTodoItem(todoItemId) {

    }

    // show todo items on onload
    window.addEventListener('DOMContentLoaded', getTodoItems);