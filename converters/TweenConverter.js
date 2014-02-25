var BaseConverter = require('./BaseConverter');

module.exports = TFCTweenConverter;

function TFCTweenConverter(src, ratio) {
    this.src = src;
    this.ratio = ratio;
    this.parseArguments();
}

TFCTweenConverter.prototype = new BaseConverter();

TFCTweenConverter.execute = function(src, ratio) {
    var conv = new TFCTweenConverter(src, ratio);

    return conv.convert();
};

TFCTweenConverter.prototype.convert = function() {
    // .to method must convert first argument object
    var props  = this.args[0],
        objStr = [],
        conv   = false,
        ratio  = this.ratio;

    Object.keys(props).forEach(function(key) {
        if ( /x|y|regX|regY/.test(key) ) {
            props[key] = props[key] * ratio;
            conv = true;
        }
        objStr.push(key + ':' + props[key]);
    });

    this.args[0] = '{' + objStr.join(',') + '}';

    if ( conv === true ) {
        console.log('Tween convert (' + this.src + ') -> (' + this.args.join(', ') + ')');
        return this.args.join(',');
    } else {
        console.log('Tween convert: nothing to convert props. skipped: ' + this.src);
        return this.src;
    }
};
