const express = require('express');
const app = express();

app.use(express.json());
app.use('/api/tasks', require('./routes/task.routes'));

module.exports = app;

