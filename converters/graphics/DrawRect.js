var BaseConverter = require('../BaseConverter');
var log           = require('../../util/log');

module.exports = DrawRect;

function DrawRect(src, ratio) {
    this.src = src;
    this.ratio = ratio;
    this.parseArguments();
}

DrawRect.prototype = new BaseConverter();

DrawRect.execute = function(src, ratio) {
    var drawRect = new DrawRect(src, ratio);

    return drawRect.convert();
};

DrawRect.prototype.convert = function() {
    var ratio = this.ratio;
    var cvd   = this.args.map(function(arg) {
        return arg * ratio;
    });

    log('DrawRect convert (' + this.src + ') -> (' + cvd.join(', ') + ')');

    return cvd.join(',');
};

