module.exports = BaseConverter;

function BaseConverter() {
    this.src  = "";
    this.args = [];
}

BaseConverter.prototype.convert = function() {
    // Interface implement
};

BaseConverter.prototype.parseArguments = function() {
    var args = this._parse(this.src),
        that = this;

    this.args = args.map(function(arg) {
        arg = arg.trim();

        if ( ! isNaN(parseFloat(arg)) ) {
            return parseFloat(arg);
        } else if ( /^\{/.test(arg) ) {
            return that._toObject(arg);
        } else if ( /^\[/.test(arg) ) {
            return that._toArray(arg);
        } else {
            return arg.trim();
        }
    });
};

BaseConverter.prototype._parse = function(str) {
    var size   = str.length,
        i      = 0,
        depth  = 0,
        parsed = [],
        stack  = "",
        word;

    for ( ; i < size; ++i ) {
        word = str[i];
        switch ( word ) {
            case '{':
            case '[':
            case '(':
                ++depth;
                break;
            case '}':
            case ']':
            case ')':
                --depth;
                break;
            case ',':
                if ( depth === 0 ) { // flatten
                    parsed.push(stack);
                    stack = "";
                    continue;
                }
                break;
        }
        stack += word;
    }
    if ( stack !== '' ) {
        parsed.push(stack);
    }

    return parsed;
};

BaseConverter.prototype._toObject = function(str) {
    if ( ! /\{.+\}$/.test(str) ) {
        throw new Error('Invalid Object format string: ' + str + '. Cannot convert to object!');
    }

    var propValues = str.replace(/\{(.+)\}/, '$1'),
        parsed     = this._parse(propValues),
        returnObj  = {};
    
    parsed.forEach(function(propValue) {
        var point = propValue.indexOf(':'),
            key   = propValue.slice(0, point).trim(),
            val   = propValue.slice(++point).trim();

        // cast to float / int
        if ( /^[0-9\.]+$/.test(val) ) {
            // TODO: Check isNaN?
            val = parseFloat(val);
        }
        returnObj[key] = val;
    });

    return returnObj;
};

BaseConverter.prototype._toArray = function(str) {
    return this._parse(str).map(function(val) {
        val = val.trim();
        if ( ! isNaN(parseFloat(val)) ) {
            return parseFloat(val);
        } else {
            return val;
        }
    });
};

