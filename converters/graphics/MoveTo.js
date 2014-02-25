var BaseConverter = require('../BaseConverter');

module.exports = MoveTo;

function MoveTo(src, ratio) {
    this.src = src;
    this.ratio = ratio;
    this.parseArguments();
}

MoveTo.prototype = new BaseConverter();

MoveTo.execute = function(src, ratio) {
    var moveTo = new MoveTo(src, ratio);

    return moveTo.convert();
};

MoveTo.prototype.convert = function() {
    var ratio = this.ratio;
    var cvd   = this.args.map(function(arg) {
        return arg * ratio;
    });

    console.log('MoveTo convert (' + this.src + ') -> (' + cvd.join(', ') + ')');

    return cvd.join(',');
};

