var BaseConverter = require('../BaseConverter');

module.exports = BeginRadialGradientFill;

function BeginRadialGradientFill(src, ratio) {
    this.src = src;
    this.ratio = ratio;
    this.parseArguments();
}

BeginRadialGradientFill.prototype = new BaseConverter();

BeginRadialGradientFill.execute = function(src, ratio) {
    var beginRadialGradientFill = new BeginRadialGradientFill(src, ratio);

    return beginRadialGradientFill.convert();
};

BeginRadialGradientFill.prototype.convert = function() {
    var cvd = [];

    cvd[0] = this.args[0];
    cvd[1] = this.args[1];
    cvd[2] = this.args[2] * this.ratio;
    cvd[3] = this.args[3] * this.ratio;
    cvd[4] = this.args[4] * this.ratio;
    cvd[5] = this.args[5] * this.ratio;
    cvd[6] = this.args[6] * this.ratio;
    cvd[7] = this.args[7] * this.ratio;


    console.log('BeginRadialGradientFill convert (' + this.src + ') -> (' + cvd.join(', ') + ')');

    return cvd.join(',');
};

