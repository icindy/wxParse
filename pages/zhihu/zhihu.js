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
    var that = this

        // 请求内容数据
        util.AJAX( "news/8911910", function( res ) {

            
            console.log(res.data.body);
            // that.setData( {
            //     wxParseData:WxParse('html',res.data.body)
            // });
            WxParse.wxParse('html',res.data.body,that)

        });
    //更新数据
    // that.setData({
    //   wxParseData:WxParse('html',html)
    // })
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

