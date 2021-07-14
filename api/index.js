import path from 'path';
const fs = require('fs');

var walk = function(dir) {
    var results = [];
    var list = fs.readdirSync(dir);
    list.forEach(function(file) {
        file = dir + '/' + file;
        var stat = fs.statSync(file);
        if (stat && stat.isDirectory()) { 
            /* Recurse into a subdirectory */
            results = results.concat(walk(file));
        } else { 
            /* Is a file */
            results.push(file);
        }
    });
    return results;
}
console.log(123)
console.log('d', __dirname)
const files = walk(path.join(__dirname, '..')).filter(p => !p.includes('node_modules'))
console.log(files)
console.log(12)
fs.readdirSync(path.join(__dirname, '..')).forEach(file => {
  console.log(file);
});
/*
fs.readdirSync(path.join(__dirname, '..')).forEach(file => {
  console.log(file);
});
*/
console.log(13)
fs.readdirSync(path.join(__dirname, '..', 'dist', 'server')).forEach(file => {
  console.log(file);
});
console.log(14)
fs.readdirSync(path.join(__dirname, '..', 'dist', 'client')).forEach(file => {
  console.log(file);
});
console.log(15)


const pa  = path.join(__dirname, '..', 'dist', 'server', 'renderPage.js')
console.log(pa)
console.log('end')
const { renderPage } =  require(pa)

module.exports = async (req, res) => {
    const result = await renderPage({
        url: req.url,
        pageProps: {},
    });
    if (result.nothingRendered) res.status(200).send('');
    else res.status(result.statusCode).setHeader("content-type", "text/html").send(result.renderResult);
}
