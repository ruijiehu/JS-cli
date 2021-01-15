const nodeCmd = require('node-cmd');
const os = require('os');
const chalk = require('chalk');

function install() {
  return new Promise((resolve, reject) => {
    let cmdStr = '';
    if (os.type() === 'Windows_NT') {
      cmdStr = `cd ${this.commander.init} & ${this.installType}`;
    } else {
      cmdStr = `cd ${this.commander.init}\n${this.installType}`;
    }
    this.progressCurrent ++;
    this.spinner.start(`[${this.progressCurrent}/${this.progress}] 正在安装依赖包...`);
    nodeCmd.get(cmdStr, err => {
      if (!err) {
        this.spinner.succeed([chalk.green('模板安装成功')]);
        resolve();
      } else {
        reject(err);
      }
    });
  });
}

module.exports = install;
