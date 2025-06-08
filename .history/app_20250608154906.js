const express = require ("express")
const db = require("./database/db")
const app = express()
require("./database/db") //database connection ko code lai import gareko xa



// const app =require ("express")
app.set ("view engine","ejs")


app.use(express.urlencoded({extended:true}))
const bcrypt = require("bcrypt")

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


app.post('/register', async (req, res) => {
 //   console.log(req.body);
    const{ username, email, password, confirm_password } = req.body
    if (password !== confirm_password) {
         res.send('Passwords do not match');
    }

await db.users.create({
        username: username,
        password: bcrypt.hashSync(password,10),
          email: email  
    })
    
  res.send('User registered successfully')
})


app.post('/login', async (req, res) => {

app.listen(3000,function(){
    console.log("Backend has started on port 3000")
})
