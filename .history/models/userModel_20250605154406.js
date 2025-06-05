

const makeUserTable = (sequelize, Datatypes)=>{
const User =sequelize.define("product",{
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
return User
}


module.exports = makeProductTable;