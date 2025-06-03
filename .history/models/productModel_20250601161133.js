const makeProductTable = (sequelize, Datatypes)=>{
const makeProductTable =sequelize.define("product",{
    title: {
        type : Datatypes.STRING
    },
    description: {
        type: Datatypes.STRING
    },
    subtitle:{
        type: Datatypes.STRING
    } 
})
return Blog
}


module.exports = makeBlogTable