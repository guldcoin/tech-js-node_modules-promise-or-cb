module.exports = function (p, cb) {
  if (typeof cb === 'undefined') return p
  else if (p.hasOwnProperty('onFailure') && p.hasOwnProperty('onSuccess')) {
    p.success(val => {
      cb(undefined, val)
    }).error(e => {
      cb(e)
    })
  } else {
    p.then(val => {
      cb(undefined, val)
    }).catch(e => {
      cb(e)
    })
  }
}
