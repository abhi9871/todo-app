const express = require('express');
const router = express.Router();
const todoController = require('../controllers/todo');

// Get all the todo items route
router.get('/get-todo-items', todoController.getTodoItems);

// Create todo item route
router.post('/create-todo', todoController.createTodo);

// Update todo item route
router.put('/update-todo/:itemId', todoController.updateTodoItem);

// Delete todo item route
router.delete('/delete-todo/:itemId', todoController.deleteTodoItem);

module.exports = router;

