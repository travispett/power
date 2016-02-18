'use strict';

const Model = require('trails-model');

/**
 * @module Set
 * @description A set within an exercise.
 */
module.exports = class Set extends Model {

  static config () {
  }

  static schema () {
    return {
      exercise: {
        model: 'Exercise'
      },
      orderIndex: {
        type: 'integer'
      },
      reps: {
        type: 'integer'
      },
      weight: {
        type: 'float'
      }
    }
  }
};
