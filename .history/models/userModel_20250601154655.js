const makeUserModel = (sequelize, DataTypes) => {
    sequelize.define("user", {
        username: {
            type : DataTypes.STRING,
        },
        
    })
}
