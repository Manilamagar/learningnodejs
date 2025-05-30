//database connection ko code 
const {Sequelize} = require("sequelize")
const sequelize = new Sequelize({
    database: "learningnodejs",
    username: "root",
    password: "",
    port:3306,
    host: "localhost"
}) //making object from Sequelize class

//sequelize connect huna try   gare vanerw vanu parxa
sequelize.authenticate()
.then(()=>{
    console.log("Connected successfully")
})
.catch((err)=)

