'use strict';

const Model = require('trails-model');

/**
 * @module WebToken
 * @description JWT Waterline model
 */
module.exports = class WebToken extends Model {

  static config () {
  }

  static schema () {
    return {
      issuer: {
        type: 'string'
      },
      expiration: {
        type: 'datetime',
        /*
         defaultsTo () {
         const SECONDS_IN_YEAR = 3.154e7
         return new Date(Date.now() + SECONDS_IN_YEAR)
         }
         */
      },
      scopes: {
        type: 'array'
      },
      subject: {
        type: 'string'
      },
      token: {
        type: 'string'
      },
      user: {
        model: 'User'
      }
    }
  }
};
