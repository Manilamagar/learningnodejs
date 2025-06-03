const makeProductTable = (sequelize, Datatypes)=>{
const P =sequelize.define("blog",{
    title: {
        type : Datatypes.STRING
    },
    description: {
        type: Datatypes.STRING
    },
    subtitle:{
        type: Datatypes.STRING
    } 
})
return Blog
}


module.exports = makeBlogTable