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
// This code defines a Sequelize model for a user table.
