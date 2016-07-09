'use strict'
//TODO: use test runner (karma/instanbul) to handle es6 & dependencies
import { expect } from 'chai'

describe('application', () => {
  let application;

  beforeEach(() => {
    application = require('../source/client/index')
  })

  it('should work', () => {
    expect(true).to.equal(true)
  })
})