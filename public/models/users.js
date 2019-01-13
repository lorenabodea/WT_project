module.exports = (sequelize, DataTypes) => {
    return sequelize.define('users', {
        'firstname': DataTypes.STRING,
        'lastname': DataTypes.STRING,
        'email': DataTypes.STRING,
        'password': DataTypes.STRING,
        'isAdmin': DataTypes.BOOLEAN,

    }, {
            underscored: true
        });
}
