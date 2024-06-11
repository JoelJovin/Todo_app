// Express boilerplate code to start with 
// with express.json() middleware

//importing Express here
const express = require ("express");
//Using the imported express library
const app = express();
const { createTodo } = require("./types");


//To log the error where occured in the whole app
app.use(express.json());

//Creating POST method to create a todo
app.post("/todos", function(req, res){
    const createPayload = req.body;
    const parsePayload = createTodo.safeParse(createPayload);
    if (!parsePayload.success){
        res.status(411).json({ 
            msg: "Please check your inputs",
        })
        return;
    }
    
})

//Creating a GET method to read the todo which created
app.get("todos", function (req, res){

})

//Creating a PUT method to Update or Edit the todo
app.put("/completed", function(req, res){
    const createId = req.body;
    if (!createId.success){
        res.status(411).json({
            msg: "Please recheck the Input you've entered",
        })
        return;
    }
    

})
