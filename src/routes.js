const express = require('express');

const ShipmentController = require('./controllers/ShipmentController');

const routes = express.Router();

routes.get('/shipments/:user_uuid', ShipmentController.get);
routes.post('/shipments', ShipmentController.store);

module.exports = routes;
