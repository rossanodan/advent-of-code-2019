var fs = require('fs');

function index2(): number {
    const read = fs.readFileSync('day-1/input-2.txt', 'utf-8');
    const modules = read.split('\n');
    let sum: number = 0;
    for (let module of modules) {
        while (module > 0) {
            module = getSingle2(module);
            sum += module;
        }
    }
    return sum;
}


function getSingle2(m: number): number {
    if (m <= 0) return 0;
    const required = Math.floor((m / 3)) - 2;
    if (required <= 0) {
        return 0;
    }
    return required;
}

console.log(index2());

// Assuming that reading operation takes constant time
// Time complexity O(n^2)
// Space complexity O(n) because I store the entire input