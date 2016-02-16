'use strict'
/* global describe, it */

const assert = require('assert')

describe('WebToken Model', () => {
  it('should exist', () => {
    assert(global.app.api.models['WebToken'])
  })
})
