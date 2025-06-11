const express = require ("express")
const db = require("./database/db")
const app = express()
require("./database/db") //database connection ko code lai import gareko xa



// const app =require ("express")
app.set ("view engine","ejs")


app.use(express.urlencoded({extended:true}))
const bcrypt = require("bcrypt")

app.get("/",async(req,res) => {
    const datas = await db.todos.findAll()// select * from todos
res.render("todo/get-todo", {todos: datas }) //rendering the get-todo.ejs file and passing the todos data to it
})

app.get("/task-todo",async (req,res) => {
    const datas = await db.todos.findAll()// select * from todos
res.render("todo/task-todo",{ todos: datas }) //rendering the get-todo.ejs file and passing the todos data to it
})

app.get("/feature",(req,res) => {
    res.render("todo/feature")
})
app.get("/about",(req,res) => {
    res.render("todo/about")
})
app.get("/contact",(req,res) => {
    res.render("todo/contact")
})

app.get("/add-todo",(req,res) => {
   res.render("todo/add-todo") 
})
app.get("/tool-todo",(req,res) => {
    res.render("todo/get-todo")
)}

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


app.post('/add-todo', async (req, res) => {
    const { task,date,description } = req.body;
    const users = await db.todos.create({
        Task: task,
        date: date,
        description: description
    })
    res.render("todo/add-todo", {
        message: "Todo added successfully"
    })
})

app.post("/login",async (req,res) => {
   
    const {email, password} =req.body;
await db.users.findAll({
    where:{
        email : email
    }
})
if(users.length==0){
    res.send("Not register email")
}else{
    //now check password, first we need to get the user from the database
   const isPasswordMatch = bcrypt.compareSync(password, users[0].password)
   if(isPasswordMatch){
    res.send("Logged in successfully")
   }else{
    res.send("Invalid credentaials")
   }
}
})

app.get("/task-todo",async(req,res) => {
    const datas = await db.todos.findAll()// select * from todos
res.render("todo/task-todo", {todos: datas }) //rendering the get-todo.ejs file and passing the todos data to it
})

app.listen(3000,function(){
    console.log("Backend has started on port 3000")
})
