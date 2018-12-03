module.exports = (sequelize, DataTypes) => {
    return sequelize.define('appointments', {
        'date': DataTypes.DATE,
        'title': DataTypes.STRING,
        'private': DataTypes.BOOLEAN,
        'start_hour': DataTypes.STRING,
        'end_hour': DataTypes.STRING

    }, {
            underscored: true
        });
}
