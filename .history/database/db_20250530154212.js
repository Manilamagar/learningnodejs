//database connection ko code 
const {Sequelize} = require("sequelize")
require("dotenv").config() //to use environment variables from .env file
//dotenv package lai use gareko xa jasko maddat le hami .env file bata environment variables use garna sakchhau
//yo garepxi only hami dotenv ko data haru yo file ma access garna sakinxa


const sequelize = new Sequelize({
    database: process.env.database_name,
    username: process,
    password: "",
    port:3306,
    host: "localhost",
    dialect: "mysql", //database ko type

}) //making object from Sequelize class

//sequelize connect huna try   gare vanerw vanu parxa

sequelize.authenticate()
.then(()=>{
    console.log("Connected successfully")
})
.catch((err)=> {
    console.log("Unable to connect to the database:", err);
})

module.exports = sequelize; //exporting the sequelize object to use in other files
//yo file ma database connection gareko xa ra yo file lai aru file ma use garna ko lagi export gareko xa