var BaseConverter = require('./BaseConverter');

module.exports = TFCTransformConverter;

function TFCTransformConverter(src, ratio) {
    this.src = src;
    this.ratio = ratio;
    this.parseArguments();
}

TFCTransformConverter.prototype = new BaseConverter();

TFCTransformConverter.execute = function(src, ratio) {
    var conv = new TFCTransformConverter(src, ratio);

    return conv.convert();
};

TFCTransformConverter.prototype.convert = function() {
    var cvd  = [],
        size = this.args.length,
        i    = 0,
        rate;

    // Parameters should convert index at 0, 1, 5, 6, 7, 8
    for ( ; i < size; ++i ) {
        rate =  ( "015678".indexOf(i.toString()) > -1 ) ? this.ratio: 1;
        cvd[i] = this.args[i] * rate;
    }

    console.log('Transform convert (' + this.args.join(', ') + ') -> (' + cvd.join(', ') + ')');

    return cvd.join(',');
};
