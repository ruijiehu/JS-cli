const download = require('download-git-repo');
// 下载模板
module.exports = function downloadTemp() {
  return new Promise(resolve => {
    download(this.git, this.commander.init, err => {
      if (!err) {
        resolve();
      } else {
        console.log('下载失败！', err);
      }
    });
  });
};