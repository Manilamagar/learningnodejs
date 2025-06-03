

const makeProductTable = (sequelize, Datatypes)=>{
const makeProductTable =sequelize.define("product",{
    name: {
        type : Datatypes.STRING
    },
    price: {
        type: Datatypes.FLOAT
    },
    quantity:{
        type: Datatypes.STRING
    },
    discription: {
        type: Datatypes.STRING
    },
    columns
    
})
return Blog
}


module.exports = makeBlogTable