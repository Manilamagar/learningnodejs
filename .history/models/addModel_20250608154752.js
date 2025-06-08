

const makeAddTable = (sequelize, Datatypes)=>{
const Add =sequelize.define("product",{
    Task: {
        type : Datatypes.STRING
    },
    date: {
        type: Datatypes.FLOAT
    },
    status:{
        type: Datatypes.STRING
    },
    discription: {
        type: Datatypes.STRING
    }
    
})
return App
}


module.exports = makeAddTable;