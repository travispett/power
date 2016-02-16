'use strict';

const Model = require('trails-model');
/**
 * User
 *
 * @description A User model
 */
module.exports = class User extends Model {
  static schema () {
    return {
      email: {
        type: 'string',
        unique: true
      },
      tokens: {
        type: 'WebToken',
        via: 'user'
      },
      username: {
        type: 'string',
        unique: true
      },
      workouts: {
        collection: 'workout',
        via: 'user'
      }
    }
  }
};
