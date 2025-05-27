const express = require ("express")
const app = express()
// const app =require ("express")

app.get("/",function(req,res){
    console.log(req)
    res.send("this is home page")
})



app.listen(3000,function(){
    console.log("Backend has started on port 3000")
})
