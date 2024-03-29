"use strict";
var fs = require('fs');
function index() {
    var read = fs.readFileSync('day-1/input.txt', 'utf-8');
    var modules = read.split('\n');
    var sum = 0;
    for (var _i = 0, modules_1 = modules; _i < modules_1.length; _i++) {
        var module_1 = modules_1[_i];
        sum = sum + getSingle(module_1);
    }
    return sum;
}
function getSingle(m) {
    return Math.floor((m / 3)) - 2;
}
console.log(index());
// Assuming that reading operation takes constant time
// Time complexity O(n)
// Space complexity O(n) because I store the entire input
