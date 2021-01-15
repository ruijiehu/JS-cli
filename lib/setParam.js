function setParam() {
  switch (this.answers.pkgManager) {
    case 'npm':
      this.installType = 'npm install';
      break;
    case 'cnpm':
      this.installType = 'cnpm install';
      break;
    case 'yarn':
      this.installType = 'yarn';
      break;
  }
}

module.exports = setParam;
