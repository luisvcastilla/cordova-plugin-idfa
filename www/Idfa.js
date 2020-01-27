var exec = require("cordova/exec");
var Idfa = {};

Idfa.getInfo = function() {
    return new Promise(function(resolve, reject) {
        cordova.exec(resolve, reject, 'Idfa', 'getInfo', []);
    });
} 

module.exports = Idfa;
