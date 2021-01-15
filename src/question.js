const inquirer = require('inquirer');
const questionList = require('../lib/questionList');
const hasYarn = require('../lib/hasYarn');
const setParam = require('../lib/setParam');

function question() {
  return new Promise(resolve => {
    if (this.commander.init) {
      // 设置项目名称默认值
      questionList.proName.default = this.commander.init;
      // 判断包管理器  yarn/cnpm/npm
      this.answers.pkgManager = hasYarn();
      inquirer.prompt([
        questionList.temp
      ]).then(answers => {
        // 选择项目模板
        this.answers.temp = answers.temp;
        // if (this.answers.temp === '可视化后台模板') {
        //   visualQuestion.call(this, resolve);
        // } else if (this.answers.temp === '态势项目模板') {
        //   stateQuestion.call(this, resolve);
        // } else 
        if (this.answers.temp === 'vue3+vant-h5') {
          mobileQuestion.call(this, resolve);
        }
        //  else if (this.answers.temp === '小程序模板') {
        //   miniQuestion.call(this, resolve);
        // } else if (this.answers.temp === '可视化组件模板') {
        //   visualQuestion.call(this, resolve);
        // }
      });
    } else {
      process.exit();
    }
  });
}

function visualQuestion(resolve) {
  questionList.proDes.default = 'a visual project';
  inquirer.prompt([
    questionList.proName,
    questionList.proDes,
    questionList.visualCon,
    questionList.title
  ]).then(answers => {
    this.visualAnswers.proName = answers.proName;
    this.visualAnswers.proDes = answers.proDes;
    this.visualAnswers.visualCon = answers.visualCon;
    this.visualAnswers.title = answers.title
    // 获取安装插件操作
    setParam.call(this);
    resolve();
  });
}

function stateQuestion(resolve) {
  inquirer.prompt([
    questionList.proName,
    questionList.proDes,
    questionList.title,
    questionList.proxies,
    questionList.path,
    questionList.width,
    questionList.height
  ]).then(answers => {
    this.stateAnswers.proName = answers.proName;
    this.stateAnswers.proDes = answers.proDes;
    this.stateAnswers.title = answers.title;
    this.stateAnswers.proxies = answers.proxies;
    this.stateAnswers.path = answers.path;
    this.stateAnswers.width = answers.width;
    this.stateAnswers.height = answers.height;
    // 获取安装插件操作
    setParam.call(this);
    resolve();
  });
}

function mobileQuestion(resolve) {
  questionList.proDes.default = 'a mobile project';
  inquirer.prompt([
    questionList.proName,
    questionList.proDes,
    questionList.title,
  ]).then(answers => {
    this.mobileAnswers.proName = answers.proName;
    this.mobileAnswers.proDes = answers.proDes;
    this.mobileAnswers.title = answers.title;
    // 获取安装插件操作
    setParam.call(this);
    resolve();
  });
}

function miniQuestion(resolve) {
  questionList.proDes.default = 'a mpVue project';
  inquirer.prompt([
    questionList.proName,
    questionList.proDes,
    questionList.title,
    questionList.proxyUrl
  ]).then(answers => {
    this.miniAnswers.proName = answers.proName;
    this.miniAnswers.proDes = answers.proDes;
    this.miniAnswers.title = answers.title;
    this.miniAnswers.proxyUrl = answers.proxyUrl;
    // 获取安装插件操作
    setParam.call(this);
    resolve();
  });
}
module.exports = question;