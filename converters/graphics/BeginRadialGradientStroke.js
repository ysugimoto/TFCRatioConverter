var BaseConverter = require('../BaseConverter');

module.exports = BeginRadialGradientStroke;

function BeginRadialGradientStroke(src, ratio) {
    this.src = src;
    this.ratio = ratio;
    this.parseArguments();
}

BeginRadialGradientStroke.prototype = new BaseConverter();

BeginRadialGradientStroke.execute = function(src, ratio) {
    var beginRadialGradientStroke = new BeginRadialGradientStroke(src, ratio);

    return beginRadialGradientStroke.convert();
};

BeginRadialGradientStroke.prototype.convert = function() {
    var cvd = [];

    cvd[0] = this.args[0];
    cvd[1] = this.args[1];
    cvd[2] = this.args[2] * this.ratio;
    cvd[3] = this.args[3] * this.ratio;
    cvd[4] = this.args[4] * this.ratio;
    cvd[5] = this.args[5] * this.ratio;

    console.log('BeginRadialGradientStroke convert (' + this.src + ') -> (' + cvd.join(', ') + ')');

    return cvd.join(',');
};

