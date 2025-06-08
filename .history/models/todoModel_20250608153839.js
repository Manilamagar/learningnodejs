

const makeTodoTable = (sequelize, Datatypes)=>{
const Todo =sequelize.define("product",{
    Title: {
        type : Datatypes.STRING
    },
    date: {
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
return Product
}


module.exports = makeProductTable;