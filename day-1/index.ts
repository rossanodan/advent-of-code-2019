const fs = require('fs');

function index(): number {
    const read = fs.readFileSync('day-1/input.txt', 'utf-8');
    const modules = read.split('\n');
    let sum: number = 0;
    for (let module of modules) {
        sum = sum + getSingle(module);
    }
    return sum;
}


function getSingle(m: number): number {
    return Math.floor((m / 3)) - 2;
}

console.log(index());

// Assuming that reading operation takes constant time
// Time complexity O(n)
// Space complexity O(n) because I store the entire input