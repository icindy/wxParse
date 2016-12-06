var Api = require('../../utils/api.js');
var util = require('../../utils/util.js');
var WxParse = require('../../wxParse/wxParse.js');
Page({
  data: {
  },
  onLoad: function () {
    var that = this;
    var article = `<div style="text-align:center;padding-top:20px;">
		<img src="https://weappdev.com/uploads/default/original/1X/84512e0f4591bcf0dee42c3293f826e0c24b560c.jpg" alt="wxParse-微信小程序富文本解析组件Logo">	
		<h1>wxParse-微信小程序富文本解析组件</h1>
		<h2>支持Html及markdown转wxml可视化</h2>
	</div>`;
    WxParse.wxParse('article','html',article,that);

  },
  
})
