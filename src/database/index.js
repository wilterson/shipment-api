const Sequelize = require('sequelize');
const dbConfig = require('../config/database');

const User = require('../models/User');
const Package = require('../models/Package');
const Quote = require('../models/Quote');
const Shipment = require('../models/Shipment');

const connection = new Sequelize(dbConfig);

User.init(connection);
Package.init(connection);
Quote.init(connection);
Shipment.init(connection);

User.associate(connection.models);
Package.associate(connection.models);
Quote.associate(connection.models);
Shipment.associate(connection.models);

module.exports = connection;
