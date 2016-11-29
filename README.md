# webpack四大核心概念

## 入口

## 出口

## 加载器
  * 识别文件
  * 转换文件
  
  基于每个文件的转换

  XXX-loader

## 插件

  应用于块

配置对象
https://webpack.js.org/configuration/


#webpack配置

```
module.exports = {
  entry: './app/index.js',
  output: {
    filename: 'bundle.js',
    path: './dist',
  },
};
```

run
```
webpack --config webpack.config.js
```
