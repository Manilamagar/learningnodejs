const express = require ("express")
const app = express()
require("./database/db") //database connection ko code lai import gareko xa



// const app =require ("express")
app.set ("view engine","ejs")


app.get("/",(req,res) => {
res.render("todo/get-todo")
})

app.get("/add-todo",(req,res) => {
   res.render("todo/add-todo") 
})

app.get("/update-todo",(req,res) => {
    res.render("todo/update-todo")
})

app.get("/login",(req,res) => {
    res.render("authentication/login")
})

app.get("/register",(req,res) => {
    res.render("authentication/register")
})

app.post('/register', async (req,res) =>{
    const { username, email, password, confirm_password } =req.body
   

    await
    
})




app.listen(3000,function(){
    console.log("Backend has started on port 3000")
})
