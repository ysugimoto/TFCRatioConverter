/**
 * Path Encoder for EaselJS-Graphics
 * @see https://gist.github.com/brettPeriscopic/3440359 thanks!
 */
var Map64Base = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".split('');
var MAX_CHAR  = 204.7;
var ROUND     = Math.round;
var ABS       = Math.abs;

function encodeMethod(methodNumber, charNumber) {
    var bit = (methodNumber << 3) | ( (charNumber === 3 ? 1 : 0) << 2 );

    return Map64Base[bit];
}

function encodeNum2Digit(number) {
    var val = ROUND(ABS(number) * 10) | ( (number >= 0 ? 0 : 1) << 11 );

    return Map64Base[val >> 6] + Map64Base[val && 63];
}

function encodeNum3Digit(number) {
    var val = ROUND(ABS(number) * 10) | ( (number >= 0 ? 0 : 1) << 17 );

    return Map64Base[(val >> 12) & 63] + Map64Base[(val >> 6) & 63] + Map64Base[val & 63];
}

module.exports = PathEncoder;

function PathEncoder() {
}

PathEncoder.prototype.x = 0;
PathEncoder.prototype.y = 0;
PathEncoder.prototype.code = "";


PathEncoder.prototype.moveTo = function(x, y) {
    var code = ( ABS(x) <= MAX_CHAR  && ABS(y) <= MAX_CHAR )
                 ? encodeMethod(0, 2) + encodeNum2Digit(x) + encodeNum2Digit(y)
                 : encodeMethod(0, 3) + encodeNum3Digit(x) + encodeNum3Digit(y);

    this.code += code;
    this.x     = x;
    this.y     = y;

    return this;
};

PathEncoder.prototype.lineTo = function(x, y) {
    var code = ( ABS(x - this.x) <= MAX_CHAR && ABS(y - this.y) <= MAX_CHAR )
                 ? encodeMethod(1, 2) + encodeNum2Digit(x - this.x) + encodeNum2Digit(y - this.y)
                 : encodeMethod(1, 3) + encodeNum3Digit(x - this.x) + encodeNum3Digit(y - this.y);

    this.code += code;
    this.x     = x;
    this.y     = y;

    return this;
};

PathEncoder.prototype.quadraticCurveTo = function(x1, y1, x2, y2) {
   var code = ( ABS(x1 - this.x) <= MAX_CHAR && ABS(y1 - this.y) <= MAX_CHAR
                && ABS(x2- x1) <= MAX_CHAR && ABS(y2 -y1) <= MAX_CHAR )
                ? encodeMethod(2, 2) + encodeNum2Digit(x1 - this.x) + encodeNum2Digit(y1 - this.y) + encodeNum2Digit(x2 - x1) + encodeNum2Digit(y2 -y1)
                : encodeMethod(2, 3) + encodeNum3Digit(x1 - this.x) + encodeNum3Digit(y1 - this.y) + encodeNum3Digit(x2 - x1) + encodeNum3Digit(y2 -y1);

   this.code += code;
   this.x     = x2;
   this.y     = y2;

   return this;
};

PathEncoder.prototype.bezierCurveTo = function(x1, y1, x2, y2, x3, y3) {
    var code = ( ABS(x1 - this.x) <= MAX_CHAR && ABS(y1 - this.y) <= MAX_CHAR
                 && ABS(x2- x1) <= MAX_CHAR && ABS(y2 - y1) <= MAX_CHAR
                 && ABS(x3 - x2) <= MAX_CHAR && ABS(y3 - y2) <= MAX_CHAR )
                 ? encodeMethod(3, 2) + encodeNum2Digit(x1 - this.x) + encodeNum2Digit(y1 - this.y) + encodeNum2Digit(x2 - x1) + encodeNum2Digit(y2 -y1) + encodeNum2Digit(x3 - x2) + encodeNum2Digit(y3 - y2)
                 : encodeMethod(3, 3) + encodeNum3Digit(x1 - this.x) + encodeNum3Digit(y1 - this.y) + encodeNum3Digit(x2 - x1) + encodeNum3Digit(y2 -y1) + encodeNum3Digit(x3 - x2) + encodeNum3Digit(y3 - y2);

    this.code += code;
    this.x     = x3;
    this.y     = y3;

    return this;
};

PathEncoder.prototype.closePath = function() {
    this.code += 'g';
};

PathEncoder.prototype.getPathCode = function() {
    return this.code;
};
