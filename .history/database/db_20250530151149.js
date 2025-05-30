//database connection ko code 
const {Sequelize} = require("sequelize")
const sequelize = new Sequelize({
    database: "learnin"
}) //making object from Sequelize class

