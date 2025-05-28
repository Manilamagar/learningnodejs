const express = require ("express")
const app = express()
// const app =require ("express")
app.set ("view engine","ejs")
app.get("/",function(req,res){
    let name = "Manila"
res.render("home",{age: 23,name: "Manila"})})

app.get("/",function(req,res){
    res.render("home")
})


app.get

app.get("/about", function(req,res){
res.render("about")
})
app.get("/Navigaion", function(req,res){
    res.render("Components/Navigaion")
})
app.get("/contact",function(req,res){
    res.render("contact")
})






app.listen(3000,function(){
    console.log("Backend has started on port 3000")
})
