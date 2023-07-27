const Todo = require('../models/todo');

// Create a todo item
exports.createTodo = async (req, res, next) => {
    const { name, description } = req.body;
    try {
        const createdTodo = await Todo.create({
            name: name,
            description: description
        });
        console.log(createdTodo);
        res.status(200).json(createdTodo);
    } catch (err) {
        console.log(err);
    }
};

// Get all toodo items
exports.getTodoItems = async (req, res, next) => {
    try {
        const todos = await Todo.findAll();
        console.log(todos);
        res.status(200).json(todos);
    } catch (err) {
       console.log(err); 
    }
};

// Update todo item
exports.updateTodoItem = async (req, res, next) => {
    const todoId = req.params.itemId;
    const { name, description } = req.body;
    try {
        const todoItem = await Todo.findByPk(todoId);
        todoItem.name = name;
        todoItem.description = description;
        todoItem.status = 'done';
        const updatedItem = await todoItem.save();
        console.log(updatedItem);
        res.status(200);
    } catch (err) {
        console.log(err);
    }
};

// Delete todo item
exports.deleteTodoItem = async (req, res, next) => {
    const todoId = req.params.itemId;
    try {
        const todoItem = await Todo.findByPk(todoId);
        const deletedItem = await todoItem.destroy();
        console.log("Item Deleted :", deletedItem.toJSON());
        res.status(200);
    } catch (err) {
        console.log(err);
    }
};