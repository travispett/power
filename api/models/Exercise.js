/**
 * Exercise
 * @description :: Model for storing Exercise records
 */

module.exports = {
  schema: true,

  attributes: {
    // Fill your attributes here
    sets: {
      model: 'Set'
    },
    time: {
      type: 'string'
    },
    title: {
      type: 'string'
      //enum: exercises
    },
    workout: {
      model: 'Workout'
    },
    toJSON() {
      return this.toObject();
    }
  },

  beforeUpdate: (values, next) => next(),
  beforeCreate: (values, next) => next()
};
