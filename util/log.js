var Argv = require('./argv');

module.exports = Logger;

function Logger() {
    var messages;

    if ( Argv.get('verbose') === null ) {
        return;
    }

    messages = [].slice.call(arguments);
    messages.forEach(function(msg) {
        console.log(msg);
    });
}
