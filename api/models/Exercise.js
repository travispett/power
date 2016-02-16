'use strict';

const Model = require('trails-model');

/**
 * @module Exercise
 * @description Model for a specific exercise within a workout.
 */
module.exports = class Exercise extends Model {

  static config () {
  }

  static schema () {
    return {
      title: {
        type: 'string'
      },
      workout: {
        model: 'Workout'
      }
    }
  }
};
