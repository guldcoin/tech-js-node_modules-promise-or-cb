/* eslint-env mocha */
var porcb = require('../index').porcb
var assert = require('chai').assert

describe('callback normal Promise', () => {
  it('returns a callback on success', (done) => {
    var p = porcb(new Promise((resolve, reject) => {
      resolve('success')
    }), (err, result) => {
      assert(err === null)
      assert(result === 'success')
      done()
    })
    assert(!(p instanceof Promise))
  })
  it('returns an error on failure', (done) => {
    var p = porcb(new Promise((resolve, reject) => {
      reject(new Error('failure'))
    }), (err, result) => {
      assert(err instanceof Error)
      assert(err.message === 'failure')
      assert(result === undefined)
      done()
    })
    assert(!(p instanceof Promise))
  })
})
