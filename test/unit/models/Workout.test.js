'use strict'
/* global describe, it */

const assert = require('assert')

describe('Workout Model', () => {
  it('should exist', () => {
    assert(global.app.api.models['Workout'])
  })
})
