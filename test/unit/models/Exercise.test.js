'use strict'
/* global describe, it */

const assert = require('assert')

describe('Exercise Model', () => {
  it('should exist', () => {
    assert(global.app.api.models['Exercise'])
  })
})
