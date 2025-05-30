//database connection ko code 
const {Sequelize} = require("sequelize")
const sequelize = new Sequelize({
    database: "learningnodejs",
    username: "root",
    passw
}) //making object from Sequelize class

