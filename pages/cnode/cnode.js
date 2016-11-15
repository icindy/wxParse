var Api = require('../../utils/api.js');
var util = require('../../utils/util.js');
var WxParse = require('../../wxParse/wxParse.js');
Page({
  data: {
    wxParseData:[]
  },
  onLoad: function () {
    this.fetchData("580ddc2eeae2a24f34e67e69");
  },
  fetchData: function (id) {
    var self = this;
    wx.request({
      url: Api.getTopicByID(id, { mdrender: false }),
      success: function (res) {
        // self.setData({
        //   wxParseData: WxParse('md',res.data.data.content)
        // });
        // WxParse.wxParse('md',res.data.data.content,self)
        WxParse.wxMoreParse('cnodeData','md',res.data.data.content,self)
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
