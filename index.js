module.exports = function (p, cb) {
  if (typeof cb === 'undefined') return p
  else if (p.hasOwnProperty('onFailure') && p.hasOwnProperty('onSuccess')) {
    p.success(val => {
      cb(null, val)
    }).error(e => {
      cb(e)
    })
  } else {
    p.then(val => {
      cb(null, val)
    }).catch(e => {
      cb(e)
    })
  }
}
