

const makeProductTable = (sequelize, Datatypes)=>{
const makeProductTable =sequelize.define("product",{
    name: {
        type : Datatypes.STRING
    },
    price: {
        type: Datatypes.FLOAT
    },
    subtitle:{
        type: Datatypes.STRING
    } 
    discription: {
        type: Datatypes.STRING
    },
    
})
return Blog
}


module.exports = makeBlogTable