const express = require ("express")
const app = express()
// const app =require ("express")

app.get("/",function(req,res){
    res.send("this is home page")
})
app.get("/" function(req,res))



app.listen(3000,function(){
    console.log("Backend has started on port 3000")
})
