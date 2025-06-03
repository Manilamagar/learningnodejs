const express = require ("express")
const app = express()
require("./database/db") //database connection ko code lai import gareko xa



// const app =require ("express")
app.set ("view engine","ejs")


app.get("/",(re))





app.listen(3000,function(){
    console.log("Backend has started on port 3000")
})
