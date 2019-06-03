# sosconf-2019 
sosconf 2019 Official Website（V2.2）
[sosconf](https://sosconf.org)

![](https://travis-ci.com/sosconf/sosconf-2019-frontend.svg?branch=master)

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
    .
    ├── ...
    ├── src
    |   ├── components        # 抽离出的组件位于components文件夹下
    │   ├── i18n              # 用于存储多语言信息
    |   ├── images            # 用于存储图片
    |   ├── pages             # 用于存放每一个路由页面
    |   ├── themes            # 用于存放CSS样式文件
    |   |   ├── ...
    |   |   ├── common.css    # 通用CSS样式
    |   |   ├── animate.css   # CSS动画解决方案
    |   |   └── ...
    |   ├── actions           # 这3个文件夹是redux解决方案，暂时用于解决国际化问题
    |   ├── reducers
    |   ├── stores
    │   └── ...
    ├── build.sh              # 从下载node到运行构建的脚本
    └── ...
