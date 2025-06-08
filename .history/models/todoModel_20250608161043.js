

const makeTable = (sequelize, Datatypes)=>{
const Add =sequelize.define("product",{
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
return Todo
}


module.exports = makeTodoTable;