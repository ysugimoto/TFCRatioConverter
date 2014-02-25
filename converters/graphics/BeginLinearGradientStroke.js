var BaseConverter = require('../BaseConverter');

module.exports = BeginLinearGradientStroke;

function BeginLinearGradientStroke(src, ratio) {
    this.src = src;
    this.ratio = ratio;
    this.parseArguments();
}

BeginLinearGradientStroke.prototype = new BaseConverter();

BeginLinearGradientStroke.execute = function(src, ratio) {
    var beginLinearGradientStroke = new BeginLinearGradientStroke(src, ratio);

    return beginLinearGradientStroke.convert();
};

BeginLinearGradientStroke.prototype.convert = function() {
    var cvd = [];

    cvd[0] = this.args[0];
    cvd[1] = this.args[1];
    cvd[2] = this.args[2] * this.ratio;
    cvd[3] = this.args[3] * this.ratio;
    cvd[4] = this.args[4] * this.ratio;
    cvd[5] = this.args[5] * this.ratio;
    
    console.log('BeginLinearGradientStroke convert (' + this.src + ') -> (' + cvd.join(', ') + ')');

    return cvd.join(',');
};

