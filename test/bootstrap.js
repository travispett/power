"use strict";

const Sails = require('sails');
const config = require('../config/env/test');

let sails;

before(done => {
  console.log('BEFORE LIFT');
  Sails.lift(config, (error, server) => {
    if (error) return done(error);
    console.log('SERVER LIFTED');
    sails = server;
    done();
  });
});

after(done => sails.lower(done));
