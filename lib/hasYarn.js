const childProcess = require('child_process');

// 判断包管理器
module.exports =  function hasYarn() {
  let _hasYarn = '';
  try {
    childProcess.execSync('yarnpkg --version', {stdio: 'ignore'});
    return (_hasYarn = 'yarn');
  } catch (e) {
    try {
      childProcess.execSync('cnpm --version', {stdio: 'ignore'});
      return (_hasYarn = 'cnpm');
    } catch (e) {
      return (_hasYarn = 'npm');
    }
  }
};