

const makeAddTable = (sequelize, Datatypes)=>{
const Add =sequelize.define("product",{
    Task: {
        type : Datatypes.STRING
    },
    date: {
       type: Datatypes.DATE
    },
    discription: {
        type: Datatypes.STRING
    }
    
})
return App
}


module.exports = makeAddTable;