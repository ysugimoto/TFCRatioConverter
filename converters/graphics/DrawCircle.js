var BaseConverter = require('../BaseConverter');
var log           = require('../../util/log');

module.exports = DrawCircle;

function DrawCircle(src, ratio) {
    this.src = src;
    this.ratio = ratio;
    this.parseArguments();
}

DrawCircle.prototype = new BaseConverter();

DrawCircle.execute = function(src, ratio) {
    var drawCircle = new DrawCircle(src, ratio);

    return drawCircle.convert();
};

DrawCircle.prototype.convert = function() {
    var ratio = this.ratio;
    var cvd   = this.args.map(function(arg) {
        return arg * ratio;
    });

    log('DrawCircle convert (' + this.src + ') -> (' + cvd.join(', ') + ')');

    return cvd.join(',');
};

