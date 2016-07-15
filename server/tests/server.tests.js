'use strict';
const expect = require('chai').expect;
const request = require('supertest');
const server = require('../server/server.js');
const apiUrl = 'http://127.0.0.1:3000';




describe('Server Functionality', () => {

  it('GET to /api/assetAlloc should respond with a 404 for invalid risk Level Input', (done) => {
    request(server)
      .get('/api/assetAlloc')
      .end((error, response) => {
        expect(res.status).to.equal(404);
        expect(res.body.length).to.equal(0);
        done();
      });
  });

  it('GET to /api/assetAlloc should respond with status 200 for valid Risk Level Input', (done) => {
    request(server)
      .get('/api/assetAlloc')
      .end((error, response) => {
        expect(res.status).to.equal(200);
        expect(res.body.length).to.equal(1);
        done();
      });
  });
  
});