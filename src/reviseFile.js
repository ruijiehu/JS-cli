const fs = require('fs');

// 修改文件 
function reviseFile() {
  return new Promise((resolve, reject) => {
    let url = `${process.cwd()}/${this.commander.init}`;
    switch(this.answers.temp) {
      case '2dmap-visiual':
        // let configFiles = ['config.dev.js', 'config.local.js', 'config.runtime.js', 'src/pages/backstage/authority-admin.vue'];
        // let titleFiles = ['src/pages/backstage/app.vue', 'src/pages/backstage/index.html']
        revisePackage(url, this.visualAnswers);
        reviseTitle(url, this.visualAnswers.title);
        // reviseVisualConfigJS(url, this.visualAnswers.visualCon, configFiles);
        // reviseVisualConfigJS(url, this.visualAnswers.title, titleFiles);
        resolve();
        break;
      case 'vue2+elemui-pc':
        revisePackage(url, this.stateAnswers);
        reviseTitle(url, this.stateAnswers.title);
        // reviseConfig(url, this.stateAnswers);
        // reviseWidthAndHeight(url, this.stateAnswers);
        resolve();
        break;
      case 'vue3+vant-h5':
        revisePackage(url, this.mobileAnswers);
        reviseTitle(url, this.mobileAnswers.title);
        // reviseConfig(url, this.mobileAnswers);
        resolve();
        break;
      case '小程序模板':
        revisePackage(url, this.miniAnswers);
        reviseTitle(url, this.miniAnswers.title);
        // reviseProxyUrl(url, this.miniAnswers.proxyUrl);
        resolve();
        break;
    }
  });
}

function revisePackage(url, answers) {
  let _url = url + '/package.json';
  fs.readFile(_url, (err, data) => {
    if (!err) {
      let _data = JSON.parse(data.toString());
      _data.name = answers.proName;
      _data.description = answers.proDes;
      _data = JSON.stringify(_data, null, 4);
      fs.writeFile(_url, _data, error => {});
    }
  });
}

//可视化后台项目代理接口修改或标题
function reviseVisualConfigJS(url, answer, conFiles) {
  conFiles.forEach(item => {
    let _url = url + `/${item}`;
    fs.readFile(_url, (err, data) => {
      // if(err) reject(err)
      if (!err) {
        let _data = data.toString();
        fs.writeFile(_url, _data.replace('##', answer), error => {});
      }
    });
  });
}

// 修改html标题
function reviseTitle(url, title) {
  let _url = url + `/index.html`;
  fs.readFile(_url, (err, data) => {
    if (!err) {
      let _data = data.toString();
      fs.writeFile(_url, _data.replace('#title#', title), error => {});
    }
  });
}

// function reviseProxyUrl(url, proxyUrl) {
//   let _url = url + `/src/common/api.js`;
//   fs.readFile(_url, (err, data) => {
//     if (!err) {
//       let _data = data.toString();
//       fs.writeFile(_url, _data.replace('#proxyUrl#', proxyUrl), error => {});
//     }
//   });
// }

// 修改系统宽高
function reviseWidthAndHeight(url, answers) {
  let _url = url + '/src/App.vue';
  fs.readFile(_url, (err, data) => {
    if (!err) {
      let _data = data.toString();
      fs.writeFile(_url, _data.replace('#width#', answers.width).replace('#height#', answers.height), error => {});
    }
  });
}

// 修改代理配置和打包文件路径
// function reviseConfig(url, answers) {
//   let _url = url + `/config/index.js`;
//   fs.readFile(_url, (err, data) => {
//     if (!err) {
//       let _data = data.toString();
      // let proxyStr = JSON.stringify(getProxyTable(answers.proxies));
      // fs.writeFile(_url, _data.replace('#path#', answers.path).replace('#proxyTable#', proxyStr), error => {});
//     }
//   });
// }

// function getProxyTable(strs) {
//   let arr = strs.split(',')
//   let proxy = arr.reduce((preValue, curValue) => {
//     if (curValue.indexOf('http') > -1) {
//       let ss = curValue.split('/')
//       let str = ss[ss.length - 1]
//       preValue['/' + str] = {
//         target: curValue,
//         changeOrigin: true,
//         pathRewrite: {}
//       }
//       preValue['/' + str].pathRewrite['^/' + str] = '/'
//       return preValue
//     } else {
//       preValue['/' + curValue] = {
//         target: 'http://192.168.3.136:8884/' + curValue,
//         changeOrigin: true,
//         pathRewrite: {}
//       }
//       preValue['/' + curValue].pathRewrite['^/' + curValue] = '/'
//       return preValue
//     }
//   }, {})
//   return proxy
// }
// 修改package.json
// function revisePackage(url) {
//   return new Promise((resolve, reject) => {
//     let _url = url + '/package.json';
//     fs.readFile(_url, (err, data) => {
//       if(err) reject(err);
//       let _data = JSON.parse(data.toString());
//       _data.name = this.answers.proName;
//       _data.description = this.answers.proDes;
//       _data = JSON.stringify(_data, null, 4);
//       fs.writeFile(_url, _data, error => (error ? reject(error) : resolve()));
//     })
//   })
// }

// function reviseJS(url) {
//   return new Promise((resolve, reject) => {
//     let _url = url + '/config.dev.js';
//     fs.readFile(_url, (err, data) => {
//       if(err) reject(err)
//       let _data = data.toString();
//       fs.writeFile(_url, _data.replace('http://192.168.3.136:8884/thor', 'http://192.168.3.136:8884/nanhu'), 
//       error => (error ? reject(error) : resolve()));
//     })
//   })
// }

module.exports = reviseFile;