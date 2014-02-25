var BaseConverter = require('../BaseConverter');
var Base64Map     = {"A":0,"B":1,"C":2,"D":3,"E":4,"F":5,"G":6,"H":7,"I":8,"J":9,"K":10,"L":11,"M":12,"N":13,"O":14,"P":15,"Q":16,"R":17,"S":18,"T":19,"U":20,"V":21,"W":22,"X":23,"Y":24,"Z":25,"a":26,"b":27,"c":28,"d":29,"e":30,"f":31,"g":32,"h":33,"i":34,"j":35,"k":36,"l":37,"m":38,"n":39,"o":40,"p":41,"q":42,"r":43,"s":44,"t":45,"u":46,"v":47,"w":48,"x":49,"y":50,"z":51,"0":52,"1":53,"2":54,"3":55,"4":56,"5":57,"6":58,"7":59,"8":60,"9":61,"+":62,"/":63};
var Map64Base     = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".split('');
var MethodArgsMap = [2, 2, 4, 6, 0];
var MethodMap     = ['moveTo', 'lineTo', 'quadraticCurveTo', 'bezierCurveTo', 'closePath'];
var PathEncoder   = require('./PathEncoder');

module.exports = DecodePath;

function DecodePath(src, ratio) {
    this.src = src;
    this.ratio = ratio;
    this.parseArguments();

    this.pathCode = this.args[0].replace(/^["']+|["']+$/g, '');
    this.pointer  = 0;
}

DecodePath.prototype = new BaseConverter();

DecodePath.execute = function(src, ratio) {
    var decodePath = new DecodePath(src, ratio);

    return decodePath.convert();
};

DecodePath.prototype.convert = function() {
    var index,
        word,
        sign,
        method,
        paramSize,
        argCount,
        bin,
        s,
        decoded = [],
        dec = [],
        x = 0,
        y = 0,
        compiled;

    do {
        // Get first char
        word = this.getByte(1);
        sign = Base64Map[word];
        if ( sign === void 0 ) {
            throw new Error('Invalid path data-sign: ' + this.pathCode);
        }

        if ( sign === 0 ) {
            x = 0;
            y = 0;
        }

        // detectBitData
        method    = (sign & 0x38) >> 3;
        paramSize = ( ((sign & 0x4 ) >> 2) > 0 ) ? 3 : 2;
        argCount  = MethodArgsMap[method];
        dec = [];

        for ( index = 0; index < argCount; ++index ) {
            bin = Base64Map[this.getByte(1)];
            s   = ( bin >> 5 ) ? -1 : 1;
            bin = ( (bin & 31) << 6 ) | ( Base64Map[this.getByte(1)] );
            if ( paramSize > 2 ) {
                bin = (bin << 6) | ( Base64Map[this.getByte(1)] );
            }
            bin = s * bin / 10;
            if ( index % 2 ) {
                bin += x;
                x = bin;
            } else {
                bin += y;
                y = bin;
            }
            dec.push(bin);
        }
        decoded.push({method: MethodMap[method], args: dec});

    } while ( this.pathCode.length > this.pointer );

    compiled = this._compile(decoded);

    console.log('DecodePath convert (' + this.pathCode + ') -> (' + compiled + ')');

    return '"' + compiled + '"';
};

DecodePath.prototype._compile = function(paths) {

    var compiler = new PathEncoder(this.ratio);
    var ratio    = this.ratio;

    paths.forEach(function(path) {
        var params = path.args.map(function(val) {
            return val * ratio;
        });

        compiler[path.method].apply(compiler, params);
    });

    return compiler.getPathCode();
};

DecodePath.prototype.getByte = function(size) {
    var dat = this.pathCode.slice(this.pointer, this.pointer + size);
    
    this.pointer += size;

    return dat;
};

