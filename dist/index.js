const fs = require ("fs")
const core = require ("@actions/core")
const os = require('os')
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
    returning = returning+source
  }
  fs.readFile('README.md','utf8', function (errr,dataa){
     if(errr){
        return console.log(errr)
     }
     let before = dataa.substring(0,dataa.indexOf("<!--LIST-START-->"))
     let after = dataa.substring(dataa.indexOf("<!--LIST-END-->")+15,dataa.length)
     console.log("BEFORE:"+before+" END:"+ after)
     fs.writeFile('README.md',before+"<!--LIST-START-->"+returning+"<!--LIST-END-->"+after, function (err) {
         if (err) return console.log(err);
          console.log('README.md updated');
     });
  });
});
