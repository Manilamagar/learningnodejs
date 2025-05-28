const express = require ("express")
const app = express()
// const app =require ("express")
app.set ("view engine","ejs")


app.get("/",function(req,res){
    res.render("Home")
})
app.get("/about", function(req,res){
res.render("About")
})



app.listen(3000,function(){
    console.log("Backend has started on port 3000")
})
