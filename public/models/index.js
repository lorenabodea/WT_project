let sequelize = require('./db.js');

let Appointments = sequelize.import('./appointments');
let Companies = sequelize.import('./companies');
let Labels = sequelize.import('./labels');
let Users = sequelize.import('./users');

Users.hasMany(Appointments, { onDelete: 'cascade' });

Labels.hasOne(Appointments);

Users.hasMany(Labels, { onDelete: 'cascade' });

Companies.hasMany(Users, { onDelete: 'cascade' });

module.exports = {
    sequelize,
    Users,
    Labels,
    Appointments,
    Companies
}