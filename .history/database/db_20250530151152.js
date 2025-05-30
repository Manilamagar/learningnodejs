//database connection ko code 
const {Sequelize} = require("sequelize")
const sequelize = new Sequelize({
    database: "learningnode"
}) //making object from Sequelize class

