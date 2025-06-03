const makeUserModel = (sequelize, DataTypes) => {
    sequelize.define("user", {
        username: {
            type : DataTypes.STRING,
        },
        password: {
            type : DataTypes.STRING,
        },
    })
    return user
}
module.exports = makeUserModel;
