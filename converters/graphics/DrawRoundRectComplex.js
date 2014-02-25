var BaseConverter = require('../BaseConverter');

module.exports = DrawRoundRectComplex;

function DrawRoundRectComplex(src, ratio) {
    this.src = src;
    this.ratio = ratio;
    this.parseArguments();
}

DrawRoundRectComplex.prototype = new BaseConverter();

DrawRoundRectComplex.execute = function(src, ratio) {
    var drawRoundRectComplex = new DrawRoundRectComplex(src, ratio);

    return drawRoundRectComplex.convert();
};

DrawRoundRectComplex.prototype.convert = function() {
    var cvd = [];

    cvd[0] = this.args[0] * this.ratio;
    cvd[1] = this.args[1] * this.ratio;
    cvd[2] = this.args[2] * this.ratio;
    cvd[3] = this.args[3] * this.ratio;
    cvd[4] = this.args[4];
    cvd[5] = this.args[5];
    cvd[6] = this.args[6];
    cvd[7] = this.args[7];
    
    console.log('DrawRoundRectComplex convert (' + this.src + ') -> (' + cvd.join(', ') + ')');

    return cvd.join(',');
};

