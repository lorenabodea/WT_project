module.exports = (sequelize, DataTypes) => {
    return sequelize.define('companies', {
        'name': DataTypes.STRING,
        'location': DataTypes.STRING
    }, {
            underscored: true
        });
}
