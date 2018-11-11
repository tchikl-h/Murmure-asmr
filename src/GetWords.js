const fs = require('fs');

function getRandomArbitrary(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const content_file = fs.readFileSync('./French.txt','utf8');
const content_tab = content_file.split("\n");
console.log(content_tab[getRandomArbitrary(0, 73451)]);