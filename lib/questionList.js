const questionList = {
  temp: {
    type: 'list',
    message: '请选择项目模板',
    name: 'temp',
    choices: [
      // '态势项目模板', '可视化后台模板', 
      'vue3+vant-h5', 
      // '小程序模板', '可视化组件模板'
    ]
  },
  author: {
    type: 'input',
    message: '作者',
    name: 'author',
    default: 'cetc'
  },
  proName: {
    type: 'input',
    message: '项目名称',
    name: 'proName',
    default: ''
  },
  proDes: {
    type: 'input',
    message: '项目描述',
    name: 'proDes',
    default: 'a state project'
  },
  visualCon: {
    type: 'input',
    message: '可视化代理接口',
    name: 'visualCon',
    default: 'thor'
  },
  title: {
    type: 'input',
    message: '项目标题名称',
    name: 'title',
    default: '移动开发'
  },
  proxies: {
    type: 'input',
    message: '代理接口',
    name: 'proxies',
    default: 'thor,http://192.168.3.136:8884/apollo'
  },
  proxyUrl: {
    type: 'input',
    message: '代理链接',
    name: 'proxyUrl',
    default: 'http://192.168.3.136:8884/thor'
  },
  path: {
    type: 'input',
    message: '打包文件路径',
    name: 'path',
    default: '/'
  },
  width: {
    type: 'input',
    message: '屏幕宽度',
    name: 'width',
    default: '1920'
  },
  height: {
    type: 'input',
    message: '屏幕高度',
    name: 'height',
    default: '1080'
  }
};

module.exports = questionList;