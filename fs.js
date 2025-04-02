const fs = require('fs');

const data =fs.writeFileSync('example.txt', 'Hello, Node.js!');
console.log(data);

fs.writeFileSync('example.txt', 'Hello, Node.js!');
console.log('File written successfully');

fs.appendFile('example.txt', '\nAppended text.', (err) => {
    if (err) throw err;
    console.log('Text appended!');
});

fs.unlink('example.txt', (err) => {
    if (err) throw err;
    console.log('File deleted!');
});

fs.mkdir('newDir', (err) => {
    if (err) throw err;
    console.log('Directory created!');
});

if (fs.existsSync('example.txt')) {
    console.log('File exists');
} else {
    console.log('File does not exist');
}
