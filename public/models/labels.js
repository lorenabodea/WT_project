module.exports = (sequelize, DataTypes) => {
    return sequelize.define('labels', {
        'description': DataTypes.STRING,
    }, {
            underscored: true
        });
}
