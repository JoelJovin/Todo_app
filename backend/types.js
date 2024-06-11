//Zod library for Input validation

const zod = require ("zod");

//Zod schema for Input Validation for craeting a todo
const createTodo = zod.object({
    title: zod.string(),
    description: zod.string(),
})

//Zod schema for Input validation of Updating the todo ID
const updateTodo = zod.object({
    id: zod.string(),
})

module.exports = {
    craeteTodo: createTodo,
    updateTodo: updateTodo,
}
