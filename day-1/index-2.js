"use strict";
var fs = require('fs');
function index2() {
    var read = fs.readFileSync('day-1/input-2.txt', 'utf-8');
    var modules = read.split('\n');
    var sum = 0;
    for (var _i = 0, modules_1 = modules; _i < modules_1.length; _i++) {
        var module_1 = modules_1[_i];
        while (module_1 > 0) {
            module_1 = getSingle2(module_1);
            sum += module_1;
        }
    }
    return sum;
}
function getSingle2(m) {
    if (m <= 0)
        return 0;
    var required = Math.floor((m / 3)) - 2;
    if (required <= 0) {
        return 0;
    }
    return required;
}
console.log(index2());
// Assuming that reading operation takes constant time
// Time complexity O(n^2)
// Space complexity O(n) because I store the entire input
