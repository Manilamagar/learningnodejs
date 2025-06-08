

const makeTodoTable = (sequelize, Datatypes)=>{
const Todo =sequelize.define("todo",{
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