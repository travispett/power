'use strict';

const Model = require('trails-model');
const exercises = require('./exercises-enum').exercises;

/**
 * @module Exercise
 * @description A specific exercise within a workout.
 */
module.exports = class Exercise extends Model {

  static config () {
  }

  static schema () {
    return {
      sets: {
        collection: 'Set',
        via: 'exercise'
      },
      time: {
        type: 'string'
      },
      title: {
        type: 'string',
        enum: exercises
      },
      workout: {
        model: 'Workout'
      }
    }
  }
};
