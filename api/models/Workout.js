'use strict';

const Model = require('trails-model');

/**
 * @module Workout
 * @description A workout.
 */
module.exports = class Workout extends Model {

  static config () {
  }

  static schema () {
    return {
      date: {
        type: 'datetime',
        defaultsTo() {
          return Date.now();
        }
      },
      exercises: {
        collection: 'Exercise',
        via: 'workout'
      },
      title: {
        type: 'string'
      },
      user: {
        model: 'user'
      }
    }
  }
};

/*
{
  date: '01/19/2016 8:45 PM',
  exercises: [{
    sets: [{
      orderIndex: 1,
      reps: 5,
      weight: 225
    }, {
      orderIndex: 2,
      reps: 5,
      weight: 225
    }, {
      orderIndex: 3,
      reps: 5,
      weight: 225
    }],
    time: ''                        //Optional param for cardio exercises
    title: 'Bench Press',
    workout: 'sd08foijlk32',        //Workout.id
  }, {}],
  title: 'Chest day',
  user: '56c237e373abe8f051c409dd'  //User.id
}
*/

