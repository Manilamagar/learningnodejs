// const sequelize = require("sequelize")
const makeBlogTable =(sequelize,Datatypes) =>{
sequelize.define("blog",{
    title : {
        type : Datatypes.STRING
    },
    description : {
        type : Datatypes.STRING
    },
    age : {
        type : Datatypes.INTEGER
    }
})
return makeBlogTable
}

module.exports = makeBlogTable;

//.define() method is used to define a new model in Sequelize
// It takes two arguments: the name of the model and an object that defines the model's attributes.