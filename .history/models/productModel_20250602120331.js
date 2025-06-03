

const makeProductTable = (sequelize, Datatypes)=>{
const makeProduct =sequelize.define("product",{
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
    columns: {
        type: Datatypes.STRING
    }
    
})
return Blog
}


module.exports = makeProductTable;