var mongoose = require('mongoose');
var TodoSchema = new mongoose.Schema({
    userId: String,
    title: String,
    text: String,
    editTime: String,
    isDone: Boolean,
});

mongoose.model('Todo', TodoSchema);

module.exports = mongoose.model('Todo');