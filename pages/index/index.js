var Api = require('../../utils/api.js');
var util = require('../../utils/util.js');
var WxParse = require('../../wxParse/wxParse.js');
Page({
  data: {
  },
  onLoad: function () {
    this.fetchData("5829b597c1d3b2b57db5e285");
  },
  fetchData: function (id) {
    var self = this;
    wx.request({
      url: Api.getTopicByID(id, { mdrender: false }),
      success: function (res) {
        // self.setData({
        //   wxParseData: WxParse('md',res.data.data.content)
        // });
        WxParse.wxParse('cnodeData0','md',res.data.data.content,self,{imagepadding:10});
        // // WxParse.wxParseTemArray('cnodeData',1,self)
        // WxParse.emojisInit("%", "/wxParse/emojis/", {
        //   "00": "00.gif",
        //   "01": "01.gif",
        //   "02": "02.gif",
        //   "03": "03.gif",
        //   "04": "04.gif",
        //   "05": "05.gif",
        //   "06": "06.gif",
        //   "07": "07.gif",
        //   "08": "08.gif",
        //   "09": "09.gif",
        //   "09": "09.gif",
        //   "10": "10.gif",
        //   "11": "11.gif",
        //   "12": "12.gif",
        //   "13": "13.gif",
        //   "14": "14.gif",
        //   "15": "15.gif",
        //   "16": "16.gif",
        //   "17": "17.gif",
        //   "18": "18.gif",
        //   "19": "19.gif",
        // });
        // var html='<p style="text-align: center; text-indent: 0;"><img alt="IMG_0050" border="0" src="https://static.oschina.net/uploads/space/2016/1125/094951_MLjx_2340783.png\">\n\n服务活动\n';
        // WxParse.wxParse('cnodeData0', 'html', html, self);
      }
    });
  }
})
