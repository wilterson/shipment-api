const request = require('supertest');

const shipment = require('./shipment.json');
const shipments = require('./shipment.json');
const payload = require('./payload.json');

const app = require('../src/server');

describe('GET /api/v1/shipments', () => {
  it('get a list of shipments', (done) => {
    request(app)
      .get('/api/v1/shipments')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200, shipments, done);
  });

  it('get a specific shipment', (done) => {
    request(app)
      .get('/api/v1/shipments')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200, shipment, done);
  });

  it('saves a new shipment', (done) => {
    request(app)
      .post('/api/v1/shipments')
      .send(payload)
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200, payload, done);
  });
});
