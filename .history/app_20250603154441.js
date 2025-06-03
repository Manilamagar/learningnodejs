const express = require ("express")
const app = express()
require("./database/db") //database connection ko code lai import gareko xa



// const app =require ("express")
app.set ("view engine","ejs")


// app.get("/",function(req,res){
//     let name = "Manila"
// res.render("home",{age: 23,name: "Manila"})
// })

// app.get("/",function(req,res){
//     res.render("home")
// })


// app.get("/contact",function(req,res){
//     res.render("contact",{age:22, name:"This is about page"})
        
// })

// app.get("/about", function(req,res){
// res.render("about")
// })
// app.get("/Navigaion", function(req,res){
//     res.render("Components/Navigaion")
// })






app.listen(3000,function(){
    console.log("Backend has started on port 3000")
})
