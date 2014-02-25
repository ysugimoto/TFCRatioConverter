var BaseConverter = require('../BaseConverter');

module.exports = DrawRoundRect;

function DrawRoundRect(src, ratio) {
    this.src = src;
    this.ratio = ratio;
    this.parseArguments();
}

DrawRoundRect.prototype = new BaseConverter();

DrawRoundRect.execute = function(src, ratio) {
    var drawRoundRect = new DrawRoundRect(src, ratio);

    return drawRoundRect.convert();
};

DrawRoundRect.prototype.convert = function() {
    var cvd = [];

    cvd[0] = this.args[0] * this.ratio;
    cvd[1] = this.args[1] * this.ratio;
    cvd[2] = this.args[2] * this.ratio;
    cvd[3] = this.args[3] * this.ratio;
    cvd[4] = this.args[4];
    
    console.log('DrawRoundRect convert (' + this.src + ') -> (' + cvd.join(', ') + ')');

    return cvd.join(',');
};

