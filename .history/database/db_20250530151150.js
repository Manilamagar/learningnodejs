//database connection ko code 
const {Sequelize} = require("sequelize")
const sequelize = new Sequelize({
    database: "learning"
}) //making object from Sequelize class

