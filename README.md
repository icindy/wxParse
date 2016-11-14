## wxParse信息

* 版本号`0.1`
* 历史版本号`0.2` 具体代码请查看仓库分支`V1`
* github地址: [https://github.com/icindy/wxParse](https://github.com/icindy/wxParse)
* 解决问题:微信小程序富文本html、md解析组件
* 详述:因为微信小程序没有提供webview等html解析，原展示类文本没有办法图文并茂的原生展示，wxParse主要目的就是弥补富文本解析空缺的组件，欢迎使用反馈

##  开发信息

[微信小程序开发论坛](http://weappdev.com)
垂直微信小程序开发交流社区

## 本次更新主要内容

* 特性增加
 + 增加内联样式
 + 增加Class植入
 + 增加图片视觉适应
 + 增加图片预览及相册功能
 + 增加标签分类(行内和块级标签分类)

* 使用优化
 + 减少引入使用代码
 + 优化使用方式
 + 释放更多接口
 
## 各个功能预览

* 多标签解析

![多标签解析](screenshoot/tag.png)

* 图片预览和相册功能GIF

![图片预览和相册功能](screenshoot/pre.gif)

* 图片视觉自适应

![图片视觉自适应](screenshoot/auto.png)

## 使用方式

> `wxParse 0.2`相比`wxParse 0.1` 优化了使用方式减少使用代码

* 1.复制插件文件`wxParse`文件夹

* 2.引入模版代码
```
<import src="../../wxParse/wxParse.wxml"/> 
<template is="wxParse" data="{{wxParseData}}"/>
```
* 3.引入模版样式
```
在app.wxss或者使用wxss内
@import "/wxParse/wxParse.wxss";
```
* 4.引入执行文件
```
var WxParse = require('../../wxParse/wxParse.js')
/*** 传值* 1. 类型type->'md/html'* 2. 介些内容data* 3. 指向对象-> page*/
var that = this
WxParse.wxParse('html',html,that)
```

* 4.可选: image的tap事件,影响图片预览和相册功能
```
wxParseImgTap: function(e){
    var that = this
    WxParse.wxParseImgTap(e,that)
  }
```

## 相关讲解文章

* [wxDiscode－微信小程序特殊字符转义符转化工具类](http://weappdev.com/t/wxdiscode/203)
* [微信小程序组件wxParse中的模版template使用 既然不能循环那就使用笨办法](http://weappdev.com/t/wxparse-template/192)
* [微信小程序单图片的自适应计算](https://weappdev.com/t/topic/301)

## 第三方引用

* [html->json html2json](https://github.com/Jxck/html2json)
目前没有找到更好的，感觉解析还是有问题，欢迎提供更好的代替品

* [markdown->html showdown](https://github.com/showdownjs/showdown)

## 流程图

![wxParse流程图](screenshoot/wxParse.png)

##  开发信息

[微信小程序开发论坛](http://weappdev.com)
垂直微信小程序开发交流社区

## 合作方

 * 欢迎加入微信小程序开发QQ群 511389428

## 历史版本信息

* 历史版本`version 0.1`
* 相关文章
  + [[wxParse version0.1正式发布-全面支持微信小程序富文本html及markdown动态解析](https://weappdev.com/t/wxparse-version0-1-html-markdown/208)](https://weappdev.com/t/wxparse-version0-1-html-markdown/208)

## 捐助信息

![支付宝/微信捐助](screenshoot/m.png)
