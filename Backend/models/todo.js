const Sequelize = require('sequelize');

const sequelize = require('../utils/database');

const Todo = sequelize.define('todo', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    description: {
        type: Sequelize.TEXT,
        allowNull: false
    },
    status: {
        type: Sequelize.ENUM('todo', 'done'),
        defaultValue: 'todo'
    }
})

module.exports = Todo;