function porcb(p, cb) {
    if (typeof cb === 'undefined') {
        return p;
    }
    else if (p.hasOwnProperty('onFailure') && p.hasOwnProperty('onSuccess')) {
        p.success(function (val) {
            cb(null, val);
        }).error(function (e) {
            cb(e);
        });
    }
    else {
        p.then(function (val) {
            cb(null, val);
        }).catch(function (e) {
            cb(e);
        });
    }
}
exports.porcb = porcb;
