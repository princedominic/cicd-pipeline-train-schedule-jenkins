var request = require('supertest');
var express = require('express');
 
var app = require('../app');
 
describe('Index Page', function() {
  this.timeout(5000); // Increase timeout to 5 seconds for this suite
  it("renders successfully", function(done) {
    request(app).get('/').expect(200, done);    
  })
})

describe('Trains API', function() {
  this.timeout(5000); // Increase timeout for the trains API suite as well
  it("returns data successfully", function(done) {
    request(app).get('/trains').expect(200).expect('Content-Length', '1093').expect('Content-Type', /json/, done); ;    
  })
})
