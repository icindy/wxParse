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
var WxAutoImage = require('WxAutoImage.js');
//type 'json','html','markdown'/'md'
var wxImageArrayObj = {};
var temimgInfoArray = [];
var imgUrlArr = [];
function wxParse(type,data,target){
  wx.showToast({
    title: '加载中....',
    icon: 'loading',
    duration: 30000
  })
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
  var wxParseImageObjArray = HtmlToJson.wxImageArray();
  imgUrlArr = [];

  for(var i=0;i<wxParseImageObjArray.length;i++){
    var node = wxParseImageObjArray[i];
    var imgUrl = node.attr.src;
    imgUrl = wxDiscode.urlToHttpUrl(imgUrl,"http");
    imgUrlArr.push(imgUrl);
  }
  //更新数据
  that.setData({
    wxParseData:wxParseData,
    wxParseImgArray: imgUrlArr,
    wxParseImageObjArray:wxParseImageObjArray 
  })
  calImageInfo(0,that);
  parseImageWh(wxParseImageObjArray,that);
  // return wxParseData;
}

// 图片宽高获取

function parseImageWh(arr,that){
  for(var i = 0; i < arr.length; i++){
    console.log("arr"+i);
    var node = arr[i];
    
  }
}

function calImageInfo(idx,that){
  var temWxParseImageObjArray = that.data.wxParseImageObjArray;
  var imgUrl = temWxParseImageObjArray[idx].attr.src;
  wx.getImageInfo({
      src: imgUrl,
      success: function (res) {
        // console.log(i+"width:"+res.width);
        // console.log("height:"+res.height);
        var recal = wxAutoImageCal(res.width,res.height);
        temWxParseImageObjArray[idx].width = recal.imageWidth;
        temWxParseImageObjArray[idx].height = recal.imageheight; 
        that.setData({
          wxParseImageObjArray:temWxParseImageObjArray 
        })

        if(idx == temWxParseImageObjArray.length-1){
          temimgInfoArray = temWxParseImageObjArray;
          
          //更新数据
          that.setData({
            wxParseData:clone(that.data.wxParseData)
          })
          wx.hideToast()
        }else{
          calImageInfo(idx+1,that);
        }
      }
    })
}


function wxAutoImageCal(originalWidth,originalHeight){
    //获取图片的原始长宽
    var windowWidth = 0,windowHeight = 0;
    var autoWidth = 0,autoHeight = 0;
    var results= {};
    wx.getSystemInfo({
      success: function(res) {
        console.dir(res);
        windowWidth = res.windowWidth;
        windowHeight = res.windowHeight;
        //判断按照那种方式进行缩放
        console.log("windowWidth"+windowWidth);
        if(originalWidth > windowWidth){//在图片width大于手机屏幕width时候
          autoWidth = windowWidth;
          console.log("autoWidth"+autoWidth);
          autoHeight = (autoWidth*originalHeight)/originalWidth;
          console.log("autoHeight"+autoHeight);
          results.imageWidth = autoWidth;
          results.imageheight = autoHeight;
        }else{//否则展示原来的数据
          results.imageWidth = originalWidth;
          results.imageheight = originalHeight;
        }
      }
    })

    return results;

  }


function clone(obj) {
    var o;
    if (typeof obj == "object") {
        if (obj === null) {
            o = null;
        } else {
            if (obj instanceof Array) {
                o = [];
                for (var i = 0, len = obj.length; i < len; i++) {
                    o.push(clone(obj[i]));
                }
            } else {
                o = {};
                for (var j in obj) {
                    o[j] = clone(obj[j]);
                }
            }
        }
    } else {
        o = obj;
    }
    if(o.node && o.tag==='img'){
      o = temimgInfoArray[0];
      temimgInfoArray.shift();
    }

    return o;
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


