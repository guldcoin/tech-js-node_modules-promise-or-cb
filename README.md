# promise-or-cb

[![source](https://img.shields.io/badge/source-bitbucket-blue.svg)](https://bitbucket.org/guld/tech-js-node_modules-promise-or-cb) [![issues](https://img.shields.io/badge/issues-bitbucket-yellow.svg)](https://bitbucket.org/guld/tech-js-node_modules-promise-or-cb/issues) [![documentation](https://img.shields.io/badge/docs-guld.tech-green.svg)](https://guld.tech/lib/promise-or-cb.html)

[![node package manager](https://img.shields.io/npm/v/promise-or-cb.svg)](https://www.npmjs.com/package/promise-or-cb) [![travis-ci](https://travis-ci.org/guldcoin/tech-js-node_modules-promise-or-cb.svg)](https://travis-ci.org/guldcoin/tech-js-node_modules-promise-or-cb?branch=guld) [![lgtm](https://img.shields.io/lgtm/grade/javascript/b/guld/tech-js-node_modules-promise-or-cb.svg?logo=lgtm&logoWidth=18)](https://lgtm.com/projects/b/guld/tech-js-node_modules-promise-or-cb/context:javascript) [![david-dm](https://david-dm.org/guldcoin/tech-js-node_modules-promise-or-cb/status.svg)](https://david-dm.org/guldcoin/tech-js-node_modules-promise-or-cb) [![david-dm](https://david-dm.org/guldcoin/tech-js-node_modules-promise-or-cb/dev-status.svg)](https://david-dm.org/guldcoin/tech-js-node_modules-promise-or-cb?type=dev)

Support both callback and promise style functions.

### Install

##### Node

```sh
npm i promise-or-cb
```

### Usage

``` js
var porcb = require('promise-or-cb')

function flexible(arg, cb) {
  return porcb(new Promise((resolve, reject) => {
    if (arg === 'good') resolve(arg)
    else reject(arg)
  }, cb)
}
```

### Credit

This project started as a fork of [unpromise](https://github.com/sugendran/unpromise), which appears abandoned. Since the code was completely rewritten with new features, I consider it orginal IP at this point.  Still, at least one test case was copied from that project, and Sugendran Ganess deserves credit.

Both projects are licensed MIT.

### License

MIT Copyright Ira Miller
