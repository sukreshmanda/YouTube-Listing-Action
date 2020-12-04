const fs = require ("fs")
const os = require('os');
fs.readFile('list.conf', 'utf8' , function (err,data) {
  if (err) {
    return console.log(err);
  }
  let array = data.split(os.EOL)
  let i=0
  let returning = ""
  for(i;i<array.length;i++){
    let data = array[i]
    let text = data.substring(0,data.indexOf("https://"))
    let link = data.substring(data.indexOf("https://"),data.length)
    let source = "<img src=\"https://cdn1.iconfinder.com/data/icons/web-page-and-iternet/90/Web_page_and_internet_icons-04-512.png\" width=\"22px\"> <a href=\""+link+"\">"+text+" </a> <br />"
    console.log(source)
  }
});
