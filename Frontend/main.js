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

    todoForm.reset();
}

    // Show todo items on screen
    function todoOnScreen(todoData) {
        // create a new list
        let listItem = document.createElement('li');
        listItem.className = 'list-group-item fs-5';
        listItem.appendChild(document.createTextNode(`${todoData.name} - ${todoData.description}`));

        if(todoData.status === 'todo'){
        // Add a done button
        let doneBtn = document.createElement('i');
        doneBtn.className = 'fas fa-check text-white rounded-pill bg-success p-2 mx-5';
        doneBtn.style.cursor = 'pointer';

        listItem.appendChild(doneBtn);

        // Add a delete button
        let deleteBtn = document.createElement('i');
        deleteBtn.className = 'fas fa-times text-white rounded-pill bg-danger p-2';
        deleteBtn.style.cursor = 'pointer';

        listItem.appendChild(deleteBtn);

        // Append listItem to pendingList if it is not done
        pendingTodoList.appendChild(listItem);

        // add an event listener to doneBtn to make todo task done
        doneBtn.addEventListener('click', (e) => {
            let listItem = e.target.parentElement;
            updateTodoItem(todoData.id, todoData);
            pendingTodoList.removeChild(listItem);
        })

        // add an event listener to deleteBtn to delete the task
        deleteBtn.addEventListener('click', (e) => {
            let listItem = e.target.parentElement;
            pendingTodoList.removeChild(listItem);
            deleteTodoItem(todoData.id);
        })
        }
        else {
            completedTodoList.appendChild(listItem);
        }
    }

    // get all the todo items
    async function getTodoItems() {
        try {
           const items = await axios.get('http://localhost:5000/get-todo-items') ;
           const todoItems = items.data;
           todoItems.forEach(item => {
                todoOnScreen(item);
           });
        } catch (err) {
            console.log(err);
        }
    }

    // create a todo item
    async function createTodoItem(todoData) {
         try {
            const item = await axios.post('http://localhost:5000/create-todo', todoData);
            console.log(item.data);
            todoOnScreen(item.data);
         } catch (err) {
            console.log(err);
         }
    }

    // update a todo item
    async function updateTodoItem(todoItemId, todoData) {
        try {
            const item = await axios.put(`http://localhost:5000/update-todo/${todoItemId}`, todoData);
            const taskDone = item.data;
            todoOnScreen(taskDone);
        } catch (err) {
            console.log(err);
        }
    }

    // delete a todo item
    async function deleteTodoItem(todoItemId) {
        try {
          const deleteItem = await axios.delete(`http://localhost:5000/delete-todo/${todoItemId}`);  
          console.log(`Item deleted: ${JSON.stringify(deleteItem.data)}`);
        } catch (err) {
            console.log(err);
        }
    }

    // show todo items on onload
    window.addEventListener('DOMContentLoaded', getTodoItems);