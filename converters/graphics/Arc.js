var BaseConverter = require('../BaseConverter');

module.exports = Arc;

function Arc(src, ratio) {
    this.src = src;
    this.ratio = ratio;
    this.parseArguments();
}

Arc.prototype = new BaseConverter();

Arc.execute = function(src, ratio) {
    var arc = new Arc(src, ratio);

    return arc.convert();
};

Arc.prototype.convert = function() {
    var cvd = [];

    cvd[0] = this.args[0] * this.ratio;
    cvd[1] = this.args[1] * this.ratio;
    cvd[2] = this.args[2] * this.ratio;
    cvd[3] = this.args[3];
    cvd[4] = this.args[4];
    if ( typeof this.args[5] !== 'undefined' ) {
        cvd[5] = this.args[5];
    }
    
    console.log('Arc convert (' + this.src + ') -> (' + cvd.join(', ') + ')');

    return cvd.join(',');
};

