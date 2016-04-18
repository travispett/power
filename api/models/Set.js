"use strict";

/**
 * Set
 * @description :: Model for storing Set records
 */

module.exports = {
  schema: true,

  attributes: {
    // Fill your attributes here
    exercise: {
      model: 'Exercise'
    },
    orderIndex: {
      type: 'integer'
    },
    reps: {
      type: 'integer'
    },
    sets: {
      type: 'integer',
      defaultsTo() {
        return 1;
      }
    },
    weight: {
      type: 'float'
    },
    toJSON() {
      return this.toObject();
    }
  },

  beforeUpdate: (values, next) => next(),
  beforeCreate: (values, next) => next()
};
