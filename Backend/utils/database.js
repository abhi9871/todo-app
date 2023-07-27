const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('todo-db', 'root', 'password', {
    dialect: 'mysql',
    host: 'localhost',
    logging: console.log,
});

module.exports = sequelize;
