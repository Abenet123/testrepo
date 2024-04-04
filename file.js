const { readFileSync, writeFileSync } = require('fs');

const write = writeFileSync('./source/hello.txt', 'the first write file in nodejs');
console.log(write);
