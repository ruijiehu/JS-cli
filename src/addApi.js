const fs = require('fs');

function addApi(str) {
  let fileUrl = str.split(',')[0];
  let indexUrl = str.split(',')[1];
  resviseJs(fileUrl);
  // console.log('fileUrl', fileUrl, 'indexUrl', indexUrl)
}

function resviseJs(url) {
  fs.readFile(url, (err, data) => {
    if (!err) {
      let _data = data.toString();
      console.log(_data)
      // fs.writeFile(_url, _data.replace('// #指标接口#', answers.width), error => {});
    }
  });
}


module.exports = addApi;