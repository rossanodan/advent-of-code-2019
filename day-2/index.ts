var fs = require('fs');

function index3(noun: number = 12, verb: number = 2): number {
  const read = fs.readFileSync('day-2/input.txt', 'utf-8');
  const codes = read.split(',');
  codes[1] = noun; // noun
  codes[2] = verb; // verb
  let i = 0;
  while (codes[i] != '99') {
    const opcode = parseInt(codes[i]);
    const firstNumberIndex = parseInt(codes[i + 1]);
    const secondNumberIndex = parseInt(codes[i + 2]);
    const storageIndex = parseInt(codes[i + 3]);
    let result;
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

function index4(): number {
  for (let noun = 0; noun <= 99; noun++) {
    for (let verb = 0; verb <= 99; verb++) {
      const target = index3(noun, verb);
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