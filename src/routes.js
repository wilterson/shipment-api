const express = require('express');

const swaggerJSDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const swaggerOptions = require('../swagger.json');

const ShipmentController = require('./controllers/ShipmentController');

const routes = express.Router();

/**
 * @swagger
 * /api/v1/shipments
 * get:
 *  description: Get all Shipments
 */
routes.get('/shipments', ShipmentController.index);
routes.get('/shipments/:id', ShipmentController.get);
routes.post('/shipments', ShipmentController.store);

// const swaggerOptions = {
//   swaggerDefinition: {
//     info: {
//       title: 'Shipments API',
//       description: 'A simple API to store and fetch shipments',
//       contact: {
//         name: 'Wilterson Garcia'
//       },
//     }
//   },
//   apis: ['routes.js']
// };

// const swaggerDocs = swaggerJSDoc(swaggerOptions);
routes.use('/docs', swaggerUi.serve);
routes.get('/docs', swaggerUi.setup(swaggerOptions));

module.exports = routes;
