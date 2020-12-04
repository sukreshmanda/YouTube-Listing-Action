const fs = require ("fs")
const os = require('os');
fs.readFile('list.conf', 'utf8' , function (err,data) {
  if (err) {
    return console.log(err);
  }
  let array = data.split(os.EOL)
  console.log(array.length)
});
