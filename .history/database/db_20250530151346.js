//database connection ko code 
const {Sequelize} = require("sequelize")
const sequelize = new Sequelize({
    database: "learningnodejs",
    username: "root",
    password: "",
    port:3306,
    host: "localhost"
}) //making object from Sequelize class

//

