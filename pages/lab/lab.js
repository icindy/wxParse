// pages/lab/lab.js
var WxParse = require('../../wxParse/wxParse.js');
Page({
  data:{},
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
    var that = this;
    var aHrefHrefData = '<div style="color:red;text-align:center;padding:20px;"><a href="https://weappdev.com/index.html">点击我，可以跳转</a></div>';
    WxParse.wxParse('aHrefHrefData', 'html', aHrefHrefData, that);

    var emojisData = '<div style="color:red;text-align:center;padding:20px;">我带有小表情[00][01][02][03]</div>';
    WxParse.wxParse('emojisData', 'html', emojisData, that);
  },
  onReady:function(){
    // 页面渲染完成
  },
  onShow:function(){
    // 页面显示
  },
  onHide:function(){
    // 页面隐藏
  },
  onUnload:function(){
    // 页面关闭
  },
  insertNodeTap: function(e){
    var that = this;
    var insertData = '<div style="color:red;text-align:center;padding:20px;">我是一个被插入的元素</div>';
    WxParse.wxParse('insertData', 'html', insertData, that);
  },
  wxParseTagATap: function(e){
    var href = e.currentTarget.dataset.src;
    console.log(href);
    //我们可以在这里进行一些路由处理
    if(href.indexOf(index) > 0){
      // wx.redirectTo({
      //   url: '../index/index'
      // })

    }

  }
})