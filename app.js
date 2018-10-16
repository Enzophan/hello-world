var express = require('express');
var app = express();
var db = require('./db');

var UserController = require('./user/UserController');
var AuthController = require('./auth/AuthController');
var TodoController = require('./todo/TodoController');

app.use('/api/users', UserController);
app.use('/api/auth', AuthController);
app.use('/api/todos', TodoController);

module.exports = app;