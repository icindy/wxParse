/**
 * author: Di (微信小程序开发工程师)
 * organization: WeAppDev(微信小程序开发论坛)(http://weappdev.com)
 *               垂直微信小程序开发交流社区
 * 
 * github地址: https://github.com/icindy/wxParse
 * 
 * for: 微信小程序富文本解析
 * detail : http://weappdev.com/t/wxparse-alpha0-1-html-markdown/184
 */


var showdown = require('showdown.js');
var HtmlToJson = require('html2json.js');
var wxDiscode = require('wxDiscode.js');
//type 'json','html','markdown'/'md'
var wxImageArrayObj = {};
var imgUrlArr = [];
function wxParse(type,data,target){
  var that = target;
  var wxParseData = [];
  if(type == 'json'){
    var json = HtmlToJson.html2json(html);
	  console.log(JSON.stringify(json, ' ', ' '));
    wxParseData = json.child;
  }else if(type == 'html'){
    data = wxDiscode.strDiscode(data);
    var json = HtmlToJson.html2json(data);
	  console.log(JSON.stringify(json, ' ', ' '));
    wxParseData = json.child;
  }else if(type == 'md' || type == 'markdown'){
    var converter = new showdown.Converter();
    var html      = converter.makeHtml(data);
    html = wxDiscode.strDiscode(html);
    var json = HtmlToJson.html2json(html);
	  console.log(JSON.stringify(json, ' ', ' '));
    wxParseData = json.child;
  }
  var wxImageArray = HtmlToJson.wxImageArray();
  imgUrlArr = [];

  for(var i=0;i<wxImageArray.length;i++){
    var node = wxImageArray[i];
    var imgUrl = node.attr.src;
    imgUrl = wxDiscode.urlToHttpUrl(imgUrl,"http");
    imgUrlArr.push(imgUrl);
  }
  //更新数据
  that.setData({
    wxParseData:wxParseData,
    wxParseImgArray: imgUrlArr
  })
  // return wxParseData;
}

function wxParseImgTap(e,that){
  var nowImgUrl = e.target.dataset.src;
  wx.previewImage({
    current: nowImgUrl, // 当前显示图片的http链接
    urls: that.data.wxParseImgArray // 需要预览的图片http链接列表
  })
}

module.exports = {
  wxParse:wxParse,
  wxParseImgTap:wxParseImgTap
}


