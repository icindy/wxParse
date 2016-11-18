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

/**
 * utils函数引入
 **/
var showdown = require('showdown.js');
var HtmlToJson = require('html2json.js');
var wxDiscode = require('wxDiscode.js');
var WxAutoImage = require('WxAutoImage.js');

/**
 * 配置及公有属性
 **/
var __placeImgeUrlHttps = "https";
var wxImageArrayObj = {};
var temimgInfoArray = [];
var imgUrlArr = [];

/**
 * 主函数入口区
 **/

// 单html或md处理入口函数
function wxParse(type, data, target) {
  var that = target;
  var wxParseData = [];
  if (type == 'json') {
    var json = HtmlToJson.html2json(html);
    console.log(JSON.stringify(json, ' ', ' '));
    wxParseData = json.child;
  } else if (type == 'html') {
    data = wxDiscode.strDiscode(data);
    var json = HtmlToJson.html2json(data);
    console.log(JSON.stringify(json, ' ', ' '));
    wxParseData = json.child;
  } else if (type == 'md' || type == 'markdown') {
    var converter = new showdown.Converter();
    var html = converter.makeHtml(data);
    html = wxDiscode.strDiscode(html);
    var json = HtmlToJson.html2json(html);
    console.log(JSON.stringify(json, ' ', ' '));
    wxParseData = json.child;
  }
  var wxParseImageObjArray = HtmlToJson.wxImageArray();
  imgUrlArr = [];

  for (var i = 0; i < wxParseImageObjArray.length; i++) {
    var node = wxParseImageObjArray[i];
    var imgUrl = node.attr.src;
    imgUrl = wxDiscode.urlToHttpUrl(imgUrl, __placeImgeUrlHttps);
    imgUrlArr.push(imgUrl);
  }
  //更新数据
  that.setData({
    wxParseData: wxParseData,
    wxParseImgArray: imgUrlArr,
    wxParseImageObjArray: wxParseImageObjArray
  })
  // calImageInfo(0, that);
}

// 多html或md处理入口函数

function wxMoreParse(bindData, type, data, target) {
  // wx.showToast({
  //   title: '加载中....',
  //   icon: 'loading',
  //   duration: 10000
  // })
  var that = target;
  var wxParseData = [];
  if (type == 'json') {
    var json = HtmlToJson.html2json(html, bindData);
    console.log(JSON.stringify(json, ' ', ' '));
    wxParseData = json.child;
  } else if (type == 'html') {
    data = wxDiscode.strDiscode(data);
    var json = HtmlToJson.html2json(data, bindData);
    console.log(JSON.stringify(json, ' ', ' '));
    wxParseData = json.child;
  } else if (type == 'md' || type == 'markdown') {
    var converter = new showdown.Converter();
    var html = converter.makeHtml(data);
    html = wxDiscode.strDiscode(html);
    var json = HtmlToJson.html2json(html, bindData);
    console.log(JSON.stringify(json, ' ', ' '));
    wxParseData = json.child;
  }
  var wxParseImageObjArray = HtmlToJson.wxImageArray();
  imgUrlArr = [];

  for (var i = 0; i < wxParseImageObjArray.length; i++) {
    var node = wxParseImageObjArray[i];
    var imgUrl = node.attr.src;
    imgUrl = wxDiscode.urlToHttpUrl(imgUrl, __placeImgeUrlHttps);
    imgUrlArr.push(imgUrl);
  }
  var moreData = {};
  moreData[bindData] = {
    tagArray: wxParseData,
    wxParseImgArray: imgUrlArr,
    wxParseImageObjArray: wxParseImageObjArray
  }
  // //更新数据
  that.setData(moreData)
}


/**
 * 图片视觉宽高计算函数区 
 **/

// 假循环获取计算图片视觉最佳宽高
function calMoreImageInfo(e, idx, that, bindData) {
  if (that.data[bindData].wxParseImageObjArray.length == 0) {
    return;
  }
  var temWxParseImageObjArray = that.data[bindData].wxParseImageObjArray;
  var imgUrl = temWxParseImageObjArray[idx].attr.src;
  var recal = wxAutoImageCal(e.detail.width, e.detail.height);
  temWxParseImageObjArray[idx].width = recal.imageWidth;
  temWxParseImageObjArray[idx].height = recal.imageheight;
  var temData = that.data[bindData];
  temData.wxParseImageObjArray = temWxParseImageObjArray;
  var moreData = {};
  if(typeof(temData.temImgNum) == "undefined"){
    temData.temImgNum = 1;
  }else{
    temData.temImgNum += 1;
  }
  
  temData.wxParseTemImageObjArray = temWxParseImageObjArray;
  moreData[bindData] = temData;
  that.setData(moreData);

  if (temData.temImgNum == temWxParseImageObjArray.length) {
    var temData = that.data[bindData];
    temData.tagArray = moreclone(that.data[bindData].tagArray, that, bindData);
    var moreData = {};
    moreData[bindData] = temData;
    that.setData(moreData);
  }
}

// 计算视觉优先的图片宽高
function wxAutoImageCal(originalWidth, originalHeight) {
  //获取图片的原始长宽
  var windowWidth = 0, windowHeight = 0;
  var autoWidth = 0, autoHeight = 0;
  var results = {};
  wx.getSystemInfo({
    success: function (res) {
      // console.dir(res);
      windowWidth = res.windowWidth;
      windowHeight = res.windowHeight;
      //判断按照那种方式进行缩放
      console.log("windowWidth" + windowWidth);
      if (originalWidth > windowWidth) {//在图片width大于手机屏幕width时候
        autoWidth = windowWidth;
        console.log("autoWidth" + autoWidth);
        autoHeight = (autoWidth * originalHeight) / originalWidth;
        console.log("autoHeight" + autoHeight);
        results.imageWidth = autoWidth;
        results.imageheight = autoHeight;
      } else {//否则展示原来的数据
        results.imageWidth = originalWidth;
        results.imageheight = originalHeight;
      }
    }
  })

  return results;

}

// 用于深度更换图片的宽高
function moreclone(obj, that, bindData) {
  var o;
  if (typeof obj == "object") {
    if (obj === null) {
      o = null;
    } else {
      if (obj instanceof Array) {
        o = [];
        for (var i = 0, len = obj.length; i < len; i++) {
          o.push(moreclone(obj[i], that, bindData));
        }
      } else {
        o = {};
        for (var j in obj) {
          o[j] = moreclone(obj[j], that, bindData);
        }
      }
    }
  } else {
    o = obj;
  }
  if (typeof (o) != 'undefined' && o.node && o.tag === 'img') {
    var moreTemimgInfoArray = that.data[bindData].wxParseTemImageObjArray;
    o = moreTemimgInfoArray[0];
    o.from = bindData;
    moreTemimgInfoArray.shift();
    var temData = that.data[bindData];
    var moreData = {};
    temData.wxParseTemImageObjArray = moreTemimgInfoArray;
    that.setData(moreData);
  }

  return o;
}


// 用于深度更换图片的宽高
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
  // console.dir(o);
  if (typeof (o) != 'undefined' && o.node && o.tag === 'img') {
    o = temimgInfoArray[0];
    temimgInfoArray.shift();
  }

  return o;
}


/**
 * 图片视觉宽高计算函数区 
 **/

// 假循环获取计算图片视觉最佳宽高
function calImageInfo(e, idx, that) {
  if (that.data.wxParseImageObjArray.length == 0) {
    return;
  }
  var temWxParseImageObjArray = that.data.wxParseImageObjArray;
  var imgUrl = temWxParseImageObjArray[idx].attr.src;
  var recal = wxAutoImageCal(e.detail.width, e.detail.height);
  temWxParseImageObjArray[idx].width = recal.imageWidth;
  temWxParseImageObjArray[idx].height = recal.imageheight;
  var temData = that.data;
  var moreData = {};
  moreData.wxParseImageObjArray = temWxParseImageObjArray;
  // temData.temImgNum = temImgNum;
  if(typeof(temData.temImgNum) == "undefined"){
    temData.temImgNum = 1;
  }else{
    temData.temImgNum += 1;
  }
  moreData.temImgNum = temData.temImgNum;
  that.setData(moreData);
  if (moreData.temImgNum == temWxParseImageObjArray.length) {
    temimgInfoArray = temWxParseImageObjArray;
    //更新数据
    that.setData({
      wxParseData: clone(that.data.wxParseData)
    })
  }
}

// 计算视觉优先的图片宽高
function wxAutoImageCal(originalWidth, originalHeight) {
  //获取图片的原始长宽
  var windowWidth = 0, windowHeight = 0;
  var autoWidth = 0, autoHeight = 0;
  var results = {};
  wx.getSystemInfo({
    success: function (res) {
      console.dir(res);
      windowWidth = res.windowWidth;
      windowHeight = res.windowHeight;
      //判断按照那种方式进行缩放
      console.log("windowWidth" + windowWidth);
      if (originalWidth > windowWidth) {//在图片width大于手机屏幕width时候
        autoWidth = windowWidth;
        console.log("autoWidth" + autoWidth);
        autoHeight = (autoWidth * originalHeight) / originalWidth;
        console.log("autoHeight" + autoHeight);
        results.imageWidth = autoWidth;
        results.imageheight = autoHeight;
      } else {//否则展示原来的数据
        results.imageWidth = originalWidth;
        results.imageheight = originalHeight;
      }
    }
  })

  return results;

}

function wxParseImgTap(e, that) {
  var nowImgUrl = e.target.dataset.src;
  var tagFrom = e.target.dataset.from;
  if (typeof (tagFrom) != 'undefined' && tagFrom.length > 0) {
    wx.previewImage({
      current: nowImgUrl, // 当前显示图片的http链接
      urls: that.data[tagFrom].wxParseImgArray // 需要预览的图片http链接列表
    })
  } else {
    wx.previewImage({
      current: nowImgUrl, // 当前显示图片的http链接
      urls: that.data.wxParseImgArray // 需要预览的图片http链接列表
    })
  }

}

function wxParseImgLoad(e, that) {
  var tagFrom = e.target.dataset.from;
  var idx = e.target.dataset.sid;
  if (typeof (tagFrom) != 'undefined' && tagFrom.length > 0) {
    calMoreImageInfo(e, idx, that, tagFrom)
  } else {
    calImageInfo(e, idx, that)
  }

}

function wxParseTemArray(bindData,total,that){
  var array = [];
  var temData = that.data;
  for(var i = 0; i < total; i++){
    var simArr = temData[bindData+i].tagArray;
    array.push(simArr);
  }
  that.setData({
    wxParseTemArray:array
  });
}

module.exports = {
  wxParse: wxParse,
  wxMoreParse: wxMoreParse,
  wxParseImgTap: wxParseImgTap,
  wxParseImgLoad: wxParseImgLoad,
  wxParseTemArray:wxParseTemArray
}


