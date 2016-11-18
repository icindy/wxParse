
//index.js
//获取应用实例

var WxParse = require('../../wxParse/wxParse.js');
//var WxParse = require('../../wxParse/showdown.js');
var Util = require('../../utils/util.js');
Page({
  onLoad: function () {
    console.log('onLoad')
     var text = 'hello';
     var text1 = '<h1>第一个数据</h1><p>hello world 0</p>';
    var text1 = '<h1>第一个数据</h1><p>hello world 1</p>';
    var text2 = '<h1>第二个数据</h1><p>hello world 2</p>';
    var text3 = '<h1>第三个数据</h1><p>hello world 3</p>';
    var text4 = '<h1>第四个数据</h1><p>hello world 4</p>';
    var text5 = '<h1>第五个数据</h1><p>hello world 5</p>';
    var text6 = '<h1>第六个数据</h1><p>hello world 6</p>';


    var that = this
    WxParse.wxParse('html',text,that);
    WxParse.wxMoreParse('moreData0','html',text1,that)
    WxParse.wxMoreParse('moreData1','html',text1,that)
    WxParse.wxMoreParse('moreData2','html',text2,that)
    WxParse.wxMoreParse('moreData3','html',text3,that)
    WxParse.wxMoreParse('moreData4','html',text4,that)
    WxParse.wxMoreParse('moreData5','html',text5,that)
    WxParse.wxMoreParse('moreData6','html',text6,that)
    WxParse.wxParseTemArray("moreData",7,that);
  },
  wxParseImgTap: function(e){
    var that = this
    WxParse.wxParseImgTap(e,that)
  },
  wxParseImgLoad: function (e){
    var that = this
    WxParse.wxParseImgLoad(e,that)
  }
})

