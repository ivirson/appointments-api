const Sequelize = require('sequelize');
const database = require('../../../infra/db');
const User = require('../../users/models/user.model');

const Appointment = database.define('Appointment', {
  id: {
    type: Sequelize.UUID,
    allowNull: false,
    primaryKey: true,
  },
  specialty: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  doctor: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  date: {
    type: Sequelize.DATE,
    allowNull: false,
  },
  time: {
    type: Sequelize.TIME,
    allowNull: false,
  },
  status: {
    type: Sequelize.STRING,
    defaultValue: 'SCHEDULED',
  },
  obs: {
    type: Sequelize.STRING(1000),
    allowNull: false,
  },
});

Appointment.belongsTo(User, { foreignKey: 'userId' });

Appointment.sync();

module.exports = Appointment;
