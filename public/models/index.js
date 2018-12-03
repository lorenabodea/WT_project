let sequelize = require('./db.js');

let Users = sequelize.import('./users');
let Labels = sequelize.import('./labels');
let Appointments = sequelize.import('./appointments');

Users.hasMany(Appointments, {onDelete:'cascade'});

Labels.hasOne(Appointments);

Users.hasMany(Labels, {onDelete:'cascade'});

module.exports = {
    sequelize,
    Users,
    Labels,
    Appointments
}