const fs = require('fs');
const filePath = process.argv[2];

const buffer = fs.readFileSync(filePath);
const str = buffer.toString();

const numLines = str.split("\n").length-1;
console.log(numLines)