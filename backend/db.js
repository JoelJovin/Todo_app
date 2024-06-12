const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://apjoel2002:cCxhsDNpVYgMHMFF@clustergrag.fub9tli.mongodb.net/TODO_app");

const todoSchema = mongoose.Schema({
    title: String,
    description: String,
    completed: {
        type: Boolean,
        default: false
    }
})

const todo = mongoose.model('todos', todoSchema);

module.exports = {
    todo
}