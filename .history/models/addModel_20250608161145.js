

const makeAddTable = (sequelize, Datatypes)=>{
const Add =sequelize.define("todo",{
    Task: {
        type : Datatypes.STRING
    },
    date: {
       type: Datatypes.DATEONLY
    },
    discription: {
        type: Datatypes.STRING
    }
    
})
return App
}


module.exports = makeAddTable;