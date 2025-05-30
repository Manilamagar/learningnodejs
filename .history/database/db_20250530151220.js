//database connection ko code 
const {Sequelize} = require("sequelize")
const sequelize = new Sequelize({
    database: "learningnodejs",
    username: "root",
    password
}) //making object from Sequelize class

