const path = require('path');
const fs = require('fs');
console.log('bbbbbbb')

const filePath = path.join(__dirname, 'public', 'geniFile.html')

fs.mkdirSync(path.dirname(filePath))
fs.writeFileSync(filePath, 'coniii')
