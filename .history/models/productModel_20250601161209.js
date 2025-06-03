

const makeProductTable = (sequelize, Datatypes)=>{
const makeProductTable =sequelize.define("product",{
    name: {
        type : Datatypes.STRING
    },
    price: {
        type: Datatypes.FLOAT
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