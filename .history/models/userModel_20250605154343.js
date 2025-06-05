

const makeUserTable = (sequelize, Datatypes)=>{
const Product =sequelize.define("product",{
    username: {
        type : Datatypes.STRING
    },
    password: {
        type: Datatypes.STRING
    },
    email:{
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