var BaseConverter = require('../BaseConverter');

module.exports = DrawEllipse;

function DrawEllipse(src, ratio) {
    this.src = src;
    this.ratio = ratio;
    this.parseArguments();
}

DrawEllipse.prototype = new BaseConverter();

DrawEllipse.execute = function(src, ratio) {
    var drawEllipse = new DrawEllipse(src, ratio);

    return drawEllipse.convert();
};

DrawEllipse.prototype.convert = function() {
    var ratio = this.ratio;
    var cvd   = this.args.map(function(arg) {
        return arg * ratio;
    });

    console.log('DrawEllipse convert (' + this.src + ') -> (' + cvd.join(', ') + ')');

    return cvd.join(',');
};

