const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const sequelize = require('./utils/database');
const todoRoutes = require('./routes/todo');
const port = 5000;

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use('/todo', todoRoutes);

sequelize.sync()
.then(() => {
    console.log(`Server is starting at ${port}`);
    app.listen(port);
})
.catch(err => {
    console.log(err);
})