const express = require ("express")
const app = express()
// const app =require ("express")
app.set ("view engine",)
app.get("/",function(req,res){
    res.send("this is home page")
})
app.get("/about", function(req,res){
res.send("This is About Page")
})



app.listen(3000,function(){
    console.log("Backend has started on port 3000")
})
