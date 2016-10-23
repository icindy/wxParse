
//index.js
//获取应用实例

var WxParse = require('../../wxParse/wxParse.js');
//var WxParse = require('../../wxParse/showdown.js');
var Util = require('../../utils/util.js');
Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    wxParseData:[]
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    console.log('onLoad')
    var text = '# wxParse-微信小程序富文本解析自定义组件，支持HTML及markdown解析 \n'
    +' > 微信小程序富文本解析自定义组件，支持HTML及markdown解析 \n\n' 
    +'## 功能列表 \n * 动态加载代码  \n * html转json \n * markdown转html转json \n * 富文本markdown解析 \n * 自定义层级解析 \n * 自定义样式表 \n'
    +'## 文件作用 \n'
    +' ``` // wxParse.wxml //用于解析使用的模版 ``` \n'
    +'## 开发信息 \n '
    +' [微信小程序开发论坛](http://weappdev.com) \n'
    +' ![微信小程序logo](http://weappdev.com/uploads/default/original/1X/9156b32bd04323f35d0957796f126b8a54595c97.png)';

    var that = this
    //更新数据
    that.setData({
      wxParseData:WxParse('md',text)
    })
  }
})