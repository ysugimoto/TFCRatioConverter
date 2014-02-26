var BaseConverter = require('../BaseConverter');
var log           = require('../../util/log');

module.exports = DrawPolyStar;

function DrawPolyStar(src, ratio) {
    this.src = src;
    this.ratio = ratio;
    this.parseArguments();
}

DrawPolyStar.prototype = new BaseConverter();

DrawPolyStar.execute = function(src, ratio) {
    var drawPolyStar = new DrawPolyStar(src, ratio);

    return drawPolyStar.convert();
};

DrawPolyStar.prototype.convert = function() {
    var cvd = [];

    cvd[0] = this.args[0] * this.ratio;
    cvd[1] = this.args[1] * this.ratio;
    cvd[2] = this.args[2] * this.ratio;
    cvd[3] = this.args[3] * this.ratio;
    cvd[4] = this.args[4];
    cvd[5] = this.args[5];
    
    log('DrawPolyStar convert (' + this.src + ') -> (' + cvd.join(', ') + ')');

    return cvd.join(',');
};

