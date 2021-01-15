#!/usr/bin/env node

const commander = require("commander");
const Ora = require('ora');
const pkg = require('../package.json');
// const downloadFormGit = require('./downloadFormGit');
const question = require('./question');
const downloadFormServe = require('./downloadFormServe');
const reviseFile = require('./reviseFile');
const install = require('./install');
const addApi = require('./addApi')

this.git = 'imwenzi/wenzi_test';  // 模板的gitHub地址
this.serveUrl = 'http://192.168.1.75/'
// this.serveUrl = 'http://localhost/'
this.answers = {};  // 选项答案
this.visualAnswers = {};  //可视化后台选项答案
this.stateAnswers = {};  // 态势项目选项答案
this.mobileAnswers = {};  //手机项目选项答案
this.miniAnswers = {}; //小程序选项答案
this.commander = commander;  // 命令
this.installType = '';  //包管理安装类型

this.spinner = new Ora(); // 安装进度提示工具
this.progress = 2; // 安装进度默认 2
this.progressCurrent = 0; // 当前进度 默认0


this.commander.version(pkg.version, '-v, --version')
    .option('-i, init <n>', '初始化项目')
    .option('-a, api <n>', '指标api');
this.commander.parse(process.argv);

// if (this.commander.api) {
//   addApi(this.commander.api)
// }
if (this.commander.init) {
  actions.call(this);
}
async function actions() {
  //问题列表
  await question.call(this);
  //下载模板
  // await downloadFormGit.call(this);  //从git下载
  await downloadFormServe.call(this);
  // 文件修改
  await reviseFile.call(this);
  // 安装插件
  await install.call(this);
}

