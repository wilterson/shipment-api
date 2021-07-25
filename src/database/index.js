const Sequelize = require('sequelize');
const dbConfig = require('../config/database');

const User = require('../models/User');
const Shipment = require('../models/Shipment');

const connection = new Sequelize(dbConfig);

User.init(connection);
Shipment.init(connection);

Shipment.associate(connection.models);

module.exports = connection;
