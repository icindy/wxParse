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

function wxParse(type,data){
  var wxParseData = [];
  if(type == 'json'){
    var json = HtmlToJson(html);
	  console.log(JSON.stringify(json, ' ', ' '));
    wxParseData = json.child;
  }else if(type == 'html'){
    data = wxDiscode.strDiscode(data);
    var json = HtmlToJson(data);
	  console.log(JSON.stringify(json, ' ', ' '));
    wxParseData = json.child;
  }else if(type == 'md' || type == 'markdown'){
    var converter = new showdown.Converter();
    var html      = converter.makeHtml(data);
    html = wxDiscode.strDiscode(html);
    var json = HtmlToJson(html);
	  console.log(JSON.stringify(json, ' ', ' '));
    wxParseData = json.child;
  }

  return wxParseData;
}
module.exports = wxParse;


