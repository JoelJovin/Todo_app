// Express boilerplate code to start with 
// with express.json() middleware

//importing Express here
const express = require ("express");
//Using the imported express library
const app = express();

//To log the error where occured in the whole app
app.use(express.json());

//Creating POST method to create a todo
app.post("todo", function(req, res){

})

//Creating a GET method to read the todo which created
app.get("todo", function (req, res){

})

//Creating a PUT method to Update or Edit the todo
app.put("todo", function(req, res){

})

//Commit aagirukka nu check pannu