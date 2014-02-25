var BaseConverter = require('../BaseConverter');

module.exports = Rect;

function Rect(src, ratio) {
    this.src = src;
    this.ratio = ratio;
    this.parseArguments();
}

Rect.prototype = new BaseConverter();

Rect.execute = function(src, ratio) {
    var rect = new Rect(src, ratio);

    return rect.convert();
};

Rect.prototype.convert = function() {
    var ratio = this.ratio;
    var cvd   = this.args.map(function(arg) {
        return arg * ratio;
    });

    console.log('Rect convert (' + this.src + ') -> (' + cvd.join(', ') + ')');

    return cvd.join(',');
};

