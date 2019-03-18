# sosconf-2019
sosconf 2019 Official Website
[sosconf](https://sosconf.org)

这里是sosconf 2019官网源码的镜像

## 部署方案
```
npm install cnpm yarn -g
cnpm install create-react-app react-scripts -g
yarn install
```

## 运行
```
npm start
```

## 构建
```
npm run build
```

## 项目结构
 - 抽离出的组件位于components文件夹下
 - i18n文件夹用于存储多语言信息
 - images文件夹用于存储图片
 - pages文件夹用于存放每一个路由页面
 - themes文件夹用于存放CSS样式文件
    - common.css是通用CSS样式
    - animate.css是CSS动画解决方案
 - stores、actions、reducers是redux解决方案，暂时用于解决国际化问题
 - build.sh是从下载node到运行构建的脚本
 - CONTRIBUTING.md 用于记录贡献者

 ## 为我们贡献源码
 请将代码fork于自己的仓库，并在作出改变之后，向我们的主仓库提出PR，如有任何问题，请发起issue