//database connection ko code 
const {Sequelize} = require("sequelize")
const sequelize = new Sequelize({
    database: "learningnodejs",
    username: "root",
    password: "",
    port:3306,
    host: "localhost",
    dialect: "mysql"

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