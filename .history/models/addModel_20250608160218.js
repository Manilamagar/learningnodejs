

const makeAddTable = (sequelize, Datatypes)=>{
const Add =sequelize.define("product",{
    Task: {
        type : Datatypes.STRING
    },
    date: {
       type: Datatypes.DATEO
    },
    discription: {
        type: Datatypes.STRING
    }
    
})
return App
}


module.exports = makeAddTable;