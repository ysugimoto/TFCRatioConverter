var BaseConverter = require('../BaseConverter');

module.exports = LineTo;

function LineTo(src, ratio) {
    this.src = src;
    this.ratio = ratio;
    this.parseArguments();
}

LineTo.prototype = new BaseConverter();

LineTo.execute = function(src, ratio) {
    var lineTo = new LineTo(src, ratio);

    return lineTo.convert();
};

LineTo.prototype.convert = function() {
    var ratio = this.ratio;
    var cvd   = this.args.map(function(arg) {
        return arg * ratio;
    });

    console.log('LineTo convert (' + this.src + ') -> (' + cvd.join(', ') + ')');

    return cvd.join(',');
};

