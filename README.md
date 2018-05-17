# promise-or-cb

[![Coverage Status](https://coveralls.io/repos/github/isysd/promise-or-cb/badge.svg?branch=master)](https://coveralls.io/github/isysd/promise-or-cb?branch=master)

Support both Promises and callbacks for your code. Simply wrap your response with this function and pass the optional callback parameter. If callback is not defined, a Promise will be returned. Otherwise, the Promise will be resolved or rejected to the callback function, using standard `(err, result)` style. Works with both legacy `.success` and `.error` style Promises as well as modern `.then` and `.catch` syntax.

This library has no dependencies.

### Install

`npm i promise-or-cb`

### Usage

``` js
var porcb = require('promise-or-cb')

function flexible(arg, cb) {
  return procb(new Promise((resolve, reject) => {
    if (arg === 'good') resolve(arg)
    else reject(arg)
  }, cb)
}
```

### Credit

This project started as a fork of [unpromise](https://github.com/sugendran/unpromise), which appears abandoned. Since the code was completely rewritten with new features, I consider it orginal IP at this point.  Still, at least one test case was copied from that project, and Sugendran Ganess deserves credit.

Both projects are licensed MIT.
