const download = require('download');
const chalk = require('chalk');
const tempOptions = {
  'vue2+elemui-pc': 'ghost',
  '2dmap-visiual': 'datav-template',
  'vue3+vant-h5': 'mobile',
  // '小程序模板': 'miniapp',
  // '可视化组件模板': 'product'
};
// 下载模板
module.exports = function downloadTemp() {
  return new Promise(resolve => {
    this.progressCurrent ++;
    this.spinner.start(`[${this.progressCurrent}/${this.progress}] 正在下载模板文件...`);
    download(`${this.serveUrl}${tempOptions[this.answers.temp]}.zip`,
     this.commander.init , { extract: true, strip: 1, mode: '666', headers: { accept: 'application/zip' } })
    .then(data => {
      // this.spinner.succeed([chalk.green('模板安装成功')]);
      resolve();
    })
    .catch(err => {
      console.log('err', err);
      process.exit();
    });
  });
};