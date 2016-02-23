"use strict";

const assert = require('chai').assert;
const Workout = require('../../../api/models/Workout');
const Fixture = require('../../fixtures/WorkoutFixture');

const newWorkout = {
  date: new Date,
  title: 'abcdefg day'
};

describe('models:Workout', () => {
  it('Should create new workout', done => {
    Workout
      .create(newWorkout)
      .then(workout => {
        assert.equal(workout.title, newWorkout.title);
        done();
      })
      .catch(done);
  });

  it('Should remove workout', done => {
    Workout
      .destroy({title: newWorkout.title})
      .then(workouts => {
        assert.equal(workouts[0].title, newWorkout.title);
        done();
      })
      .catch(done);
  });
});
