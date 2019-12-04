"use strict";
var fs = require('fs');
function index3(noun, verb) {
    if (noun === void 0) { noun = 12; }
    if (verb === void 0) { verb = 2; }
    var read = fs.readFileSync('day-2/input.txt', 'utf-8');
    var codes = read.split(',');
    codes[1] = noun; // noun
    codes[2] = verb; // verb
    var i = 0;
    while (codes[i] != '99') {
        var opcode = parseInt(codes[i]);
        var firstNumberIndex = parseInt(codes[i + 1]);
        var secondNumberIndex = parseInt(codes[i + 2]);
        var storageIndex = parseInt(codes[i + 3]);
        var result = void 0;
        switch (opcode) {
            case 1:
                result = parseInt(codes[firstNumberIndex]) + parseInt(codes[secondNumberIndex]);
                codes[storageIndex] = result;
                break;
            case 2:
                result = parseInt(codes[firstNumberIndex]) * parseInt(codes[secondNumberIndex]);
                codes[storageIndex] = result;
                break;
        }
        i += 4;
    }
    return codes[0];
}
function index4() {
    var read = fs.readFileSync('day-2/input-2.txt', 'utf-8');
    var codes = read.split(',');
    for (var noun = 0; noun <= 99; noun++) {
        for (var verb = 0; verb <= 99; verb++) {
            var target = index3(noun, verb);
            if (target === 19690720) {
                return 100 * noun + verb;
            }
        }
    }
    return 0;
}
console.log(index3());
console.log(index4());
// Assuming that reading operation takes constant time
// Time complexity O(n)
// Space complexity O(n) because I store the entire input
