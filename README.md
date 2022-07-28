## 一个 vue 框架常用的基础功能

> 一个 vue 框架常用的基础功能

### 项目结构

```
├── build  #webpack编译相关文件目录，一般不用动
├── config  #配置目录，一般不用动
├── dist  #生产环境下build后的文件存放目录（发布目录）
├── static  #开发模式下的静态资源目录
├── src #源码目录
│   ├─── assets  #资源目录
|   |    ├─── images #小图片存放目录（20K以内），大图片请放到OSS上
|   |    ├─── css #公共样式文件，一般不允许自己修改，所有样式建议使用less格式书写
|   |    ├─── font #公共字体文件
|   |─── bus   #eventBus
│   ├─── components  #公共组件及框架组件
|   |─── config   # rem或字体配置代码
│   ├─── layouts  #页面布局组件，基本布局都已经好了，一般不允许在此添加文件
|   |    ├─── console.vue #登录页等全屏的布局
|   |    ├─── default.vue #无侧边菜单的布局
|   |    ├─── index.vue #有侧边菜单的布局
|   |    ├─── page.vue #有侧边菜单的布局，实际业务页面均使用此布局
│   ├─── router  #总路由目录，一般不允许添加，如若需要请按照index.js内容依样添加内容
│   ├─── settings  #公用配置文件目录，主要保存API服务器地址及根据环境进行API地址切换
|   |    ├─── development.js #开发环境的配置，主要配置集成在youban-utils组件里了
|   |    ├─── production.js #线上或测试环境的配置，请不要修改
|   |    ├─── index.js #配置的入口文件，请不要修改
│   ├─── store #vuex相关目录
│   ├─── App.vue #项目入口组件，请勿修改
│   └─── main.js  #项目的入口文件，请勿修改
├── index.html #首页入口文件，你可以添加一些 meta 信息或同统计代码啥的
├── package.json #项目配置/依赖文件
└── README.md #项目的说明文档，markdown 格式
```

## 项目约定

## 启动步骤

```bash
# 安装项目依赖
npm install

# 本地运行
npm run dev

# 发布上线
npm run build
```
