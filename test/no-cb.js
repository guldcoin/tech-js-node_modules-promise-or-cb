/* eslint-env mocha */
var porcb = require('../index').porcb
var assert = require('chai').assert

describe('no callback', () => {
  it('returns a promise', (done) => {
    var p = porcb(new Promise((resolve, reject) => {
      resolve()
    }))
    assert(p instanceof Promise)
    p.then(done).catch(done)
  })
})
