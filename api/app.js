/* eslint-disable no-console */
require('dotenv').config();

const express = require('express');
const cors = require('cors');
const dbConnection = require('./config/db');

const app = express();

app.use(cors());
app.use(express.json());

dbConnection().then(() => console.log('DB online'));

app.use('/api', require('./routes/auth.routes'));
app.use('/api/projects', require('./routes/project.routes'));
app.use('/api/tasks', require('./routes/todo.routes'));

app.listen(process.env.PORT, () => {
    console.log(`Server running on port ${process.env.PORT}`);
});
