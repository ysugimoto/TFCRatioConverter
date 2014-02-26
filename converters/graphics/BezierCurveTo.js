var BaseConverter = require('../BaseConverter');
var log           = require('../../util/log');

module.exports = BezierCurveTo;

function BezierCurveTo(src, ratio) {
    this.src = src;
    this.ratio = ratio;
    this.parseArguments();
}

BezierCurveTo.prototype = new BaseConverter();

BezierCurveTo.execute = function(src, ratio) {
    var bezierCurveTo = new BezierCurveTo(src, ratio);

    return bezierCurveTo.convert();
};

BezierCurveTo.prototype.convert = function() {
    var ratio = this.ratio;
    var cvd   = this.args.map(function(arg) {
        return arg * ratio;
    });

    log('BezierCurveTo convert (' + this.src + ') -> (' + cvd.join(', ') + ')');

    return cvd.join(',');
};

