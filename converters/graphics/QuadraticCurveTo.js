var BaseConverter = require('../BaseConverter');
var log           = require('../../util/log');

module.exports = QuadraticCurveTo;

function QuadraticCurveTo(src, ratio) {
    this.src = src;
    this.ratio = ratio;
    this.parseArguments();
}

QuadraticCurveTo.prototype = new BaseConverter();

QuadraticCurveTo.execute = function(src, ratio) {
    var quadraticCurveTo = new QuadraticCurveTo(src, ratio);

    return quadraticCurveTo.convert();
};

QuadraticCurveTo.prototype.convert = function() {
    var ratio = this.ratio;
    var cvdvv = this.args.map(function(arg) {
        return arg * ratio;
    });

    log('QuadraticCurveTo convert (' + this.src + ') -> (' + cvd.join(', ') + ')');

    return cvd.join(',');
};

