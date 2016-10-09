const fs = require('fs');
const through = require('through2');
const replaceExt = require('replace-ext');
const handlebars = require('handlebars');

module.exports = filename => {
  const hbstring = fs.readFileSync(filename, 'utf8')
  const template = handlebars.compile(hbstring);
  return through.obj((file, encoding, callback) => {
    const data = JSON.parse(file.contents);
    file.contents = new Buffer(template(data));
    file.path = replaceExt(file.path, '.html')
    callback(null, file);
  });
};
