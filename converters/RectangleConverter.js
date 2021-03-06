var BaseConverter = require('./BaseConverter');
var log           = require('../util/log');

module.exports = TFCRectangleConverter;

function TFCRectangleConverter(src, ratio) {
    this.src = src;
    this.ratio = ratio;
    this.parseArguments();
}

TFCRectangleConverter.prototype = new BaseConverter();

TFCRectangleConverter.execute = function(src, ratio) {
    var conv = new TFCRectangleConverter(src);

    return conv.convert(ratio);
};

TFCRectangleConverter.prototype.convert = function(ratio) {
   var cvd  = this.args.map(function(arg) {
        return arg * ratio;
    });

    log('Rectangle convert (' + this.args.join(', ') + ') -> (' + cvd.join(', ') + ')');

    return cvd.join(',');
};
