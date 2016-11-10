//index.js
//获取应用实例
const util = require( '../../utils/util.js' );
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
    //添加测试html；增加一个video标签
    var html = '<h1>H1</h1><h2>H2</h2><h3>H3</h3><h4>H4</h4><h5>H5</h5><h6>H6</h6><strong>strong</strong><s>ssss</s><em>em</em><font>font</font><i>iiiii</i><label>label</label>';

    var that = this
    //更新数据
    that.setData({
      wxParseData:WxParse('html',html)
    })

  },
  wxParseImgTap: function(e){
    
  }
})

