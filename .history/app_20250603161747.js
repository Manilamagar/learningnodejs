const express = require ("express")
const app = express()
require("./database/db") //database connection ko code lai import gareko xa



// const app =require ("express")
app.set ("view engine","ejs")


app.get("/",(req,res) => {
res.render("")
})

app.get("/add-todo",(req,res) => {
   res.render("todo/add-todo") 
})

app.get("/update-todo",(req,res) => {
    res.render("todo/upadte-todo")
})

app.get("/login-page",(req,res) => {
    res.render("authentication/loginpage")
})

app.get("/register",(req,res) => {
    res.render("authenticationregisterpage")
})





app.listen(3000,function(){
    console.log("Backend has started on port 3000")
})
