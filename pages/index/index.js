var Api = require('../../utils/api.js');
var util = require('../../utils/util.js');
var WxParse = require('../../wxParse/wxParse.js');
Page({
  data: {
    wxParseData:[]
  },
  onLoad: function () {
    this.fetchData("5829b597c1d3b2b57db5e285");
  },
  fetchData: function (id) {
    var self = this;
    wx.request({
      url: Api.getTopicByID(id, { mdrender: false }),
      success: function (res) {
        WxParse.wxParse('md',res.data.data.content,self)
        // 去掉注视开启多实现方式
        // WxParse.wxMoreParse('wxParseInfoData','md',res.data.data.content,self)
      }
    });
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
