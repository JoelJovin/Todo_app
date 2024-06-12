// Express boilerplate code to start with 
// with express.json() middleware

//importing Express here
const express = require ("express");
const { createTodo, updateTodo } = require("./types");
const { todo } = require("./db");
const zod = require("zod")
//Using the imported express library
const app = express();

//To log the error where occured in the whole app
app.use(express.json());

//Creating POST method to create a todo
app.post("/todos", async function(req, res){
    const createPayload = req.body;
    const parsePayload = createTodo.safeParse(createPayload);
    if (!parsePayload.success){
        res.status(411).json({
            msg: "Please check your input"
        })
        return;
    }
    
    //put it into the db
    await todo.create ({
        title: createPayload.title,
        description: createPayload.description,
        completed: false
    })
    res.json({
        msg: "Todo Created Successfully"
    })
})

//Creating a GET method to read the todo which created
app.get("/todos", async function (req, res){
    const todos = await todo.find({});
    res.json({
        todos
    })

})

//Creating a PUT method to Update or Edit the todo
app.put("/completed", async function(req, res){
    const createPayload = req.body;
    const parsePayload = updateTodo.safeParse(createPayload);
    if (!parsePayload.success){
        res.status(411).json({
            msg: "Please check your changed data"
        })
        return;
    }
    await todo.update({
        _id: req.body.id
    }, {
        completed: true
    })
    res.json({
        msg: "Todo marked as Completed"
    })


})

app.listen(3000);