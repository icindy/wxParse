/**
 * author: Di (微信小程序开发工程师)
 * organization: WeAppDev(微信小程序开发论坛)(http://weappdev.com)
 *               垂直微信小程序开发交流社区
 * 
 * github地址: https://github.com/icindy/WxAutoImage
 * 
 * for: 微信小程序图片自动宽高
 * detail : 
 */


/***
 * wxAutoImageCal 计算宽高
 * 
 * 参数 e: iamge load函数的取得的值
 * 返回计算后的图片宽高
 * {
 *  imageWidth: 100px;
 *  imageHeight: 100px;
 * }
 */
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

module.exports = {
  wxAutoImageCal: wxAutoImageCal
}