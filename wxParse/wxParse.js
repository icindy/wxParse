/*! showdown 19-08-2016 */
var showdown = require('showdown.js');
var HtmlToJson = require('html2json.js');
//type 'json','html','markdown'/'md'

function wxParse(type,data){
  var wxParseData = [];
  if(type == 'json'){
    var json = HtmlToJson(html);
	  console.log(JSON.stringify(json, ' ', ' '));
    wxParseData = json.child;
  }else if(type == 'html'){
                              //你的字符串
    data = data.replace(/\r\n/g,"")  
    data = data.replace(/\n/g,""); 
    
    // console.log(data)
    var json = HtmlToJson(data);
	  console.log(JSON.stringify(json, ' ', ' '));
    wxParseData = json.child;
  }else if(type == 'md' || type == 'markdown'){
    var converter = new showdown.Converter();
    var html      = converter.makeHtml(data);
    // console.log(html);
    html = html.replace(/\r\n/g,"")  
    html = html.replace(/\n/g,""); 
    
    // console.log(data)
    var json = HtmlToJson(html);
	  console.log(JSON.stringify(json, ' ', ' '));
    wxParseData = json.child;
  }

  return wxParseData;
}


module.exports = wxParse;


